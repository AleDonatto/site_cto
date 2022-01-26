import React from 'react'
import { Provider } from 'react-redux'
import { ProductosPage } from '../../../componets/pages/ProductosPage'  
import { Store } from '../../../componets/reducers/store'

function ProductoPage(props) {
    const id = props.params.id

    return (
        <div>
            <Provider store={Store}>
                < ProductosPage productoId={id}/>
            </Provider>
        </div>
    )
}

export default ProductoPage