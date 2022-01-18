import React from 'react'
import { ProductosPage } from '../../../componets/pages/ProductosPage'  

function ProductoPage(props) {
    const id = props.params.id

    return (
        <div>
            < ProductosPage productoId={id}/>
        </div>
    )
}

export default ProductoPage