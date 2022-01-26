import { useState } from "react";

export const CarListReducer  = (state = [], action) => {
    
    //const [carList, setcarList] = useState([]);
    
    switch (action) {
        case 'agregar':
            /*const array = [];
            if(carList.length === 0){
                array.push({ adultos:2 , ninos:0})
            
                setcarList(array)
            }else {
                array.push(...carList, { adultos:2 , ninos:0})
            
                setcarList(array)
            }*/

            return state;

        case 'eliminar':
            return state;
    
        default:
            return state;
    }
}