import React from 'react'
import { CategoriaProductosPage } from '../../componets/pages/CategoriaProductosPage'

/*export default const CategoriaPage = (props) => {
    return (
        <div>
            <p>pruenba</p>
            <CategoriaProductosPage />
        </div>
    )
}*/    

function CategoriaPage(props) {
    const id = props.params.id

    return (
        <div>
            <CategoriaProductosPage idCategoria={id} />
        </div>
    )
}

export default CategoriaPage