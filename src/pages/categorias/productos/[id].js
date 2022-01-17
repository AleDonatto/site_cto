import React from 'react'
import { ProductosPage } from '../../../componets/pages/ProductosPage'

/*export default const CategoriaPage = (props) => {
    return (
        <div>
            <p>pruenba</p>
            <CategoriaProductosPage />
        </div>
    )
}*/    

function ProductoPage(props) {
    const id = props.params.id

    return (
        <div>
            < ProductosPage />
        </div>
    )
}

export default ProductoPage