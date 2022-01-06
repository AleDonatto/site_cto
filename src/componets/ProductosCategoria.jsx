import React, { useState } from 'react'

export const ProductosCategoria = () => {
    const [prodCateg, setprodCateg] = useState({})

    useEffect(() => {
        return () => {
            fetch(`http://admin.ctodelpacifico.com/api/getPoductosxCategoria/${categoria}`)
            .then(response => response.json())
            .then(resultData => {
                setprodCateg(resultData)
            })
        }
    }, [])
    return (
        <div>
            
        </div>
    )
}
