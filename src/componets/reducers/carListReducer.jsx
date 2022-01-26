import { useState } from "react";

export const carListReducer  = (state = [], action) => {
    const [carList, setcarList] = useState([]);

    
    switch (action) {
        case 'agregar':
            const array = [];
            if(carList.length === 0){
                array.push({ adultos:2 , ninos:0})
            
                setcarList(array)
            }else {
                array.push(...carList, { adultos:2 , ninos:0})
            
                setcarList(array)
            }

            return carList;

        case 'eliminar':
            return {};
    
        default:
            return state;
    }
}