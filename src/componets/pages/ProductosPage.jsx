import React, { useEffect, useState } from 'react'
//import { Seo } from '../Seo'
import { Navbar } from '../Navbar'
import { Link } from 'gatsby'
import {addProducto, consProductos} from '../actions/actionsProductos'
import Swal from 'sweetalert2'

export const ProductosPage = ({productoId}) => {

    const dimension = {
        height: "100%",
        width: "60%" 
    }

    const [producto, setproducto] = useState([])
    const [moreProductos, setmoreProductos] = useState([])
    const [cantidad, setcantidad] = useState(1);
    const [carList, setcarList] = useState([]);

    useEffect(() => {
        fetch(`http://admin.ctodelpacifico.com/api/getProducto/${productoId}`)
        .then( response => response.json())
        .then(resultData => {
            setproducto(resultData.producto)
            setmoreProductos(resultData.moreProductos)
        })
        return () => {}
    }, [productoId])

    const handleAddCantidad = () => {
        if(cantidad === 100){ 
            setcantidad(100)
        }else{
            setcantidad(cantidad+1)
        }
    }

    const handleSubstracCantidad = () => {
        if(cantidad === 1){
            setcantidad(1)
        }else{
            setcantidad(cantidad-1)
        }
    }

    const handleAddProducto = (id,nameproducto,image,cantidad) => {
        addProducto(id, nameproducto, image, cantidad)

        Swal.fire('Good job!', 'Se agrego el producto!','success')
        const array = consProductos()
        setcarList(array.lenght)
        setcantidad(1)
    }

    return (
        <div>
            <Navbar numero={carList} />
            <div className="mt-10 py-10 bg-white">
                <main className="my-8">
                    <div className="container mx-auto px-6">
                        <div className="shadow md:flex md:items-center">
                            <div className="shadow w-full h-64 md:w-1/2 lg:h-96">
                                <img className="bg-auto rounded-md object-cover mx-auto" src={`http://admin.ctodelpacifico.com/storage/${producto.image}`} alt={producto.nameProducto} style={dimension} />
                            </div>
                            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                                <h3 className="text-gray-700 uppercase text-lg">{producto.nameProducto}</h3>
                                <span className="text-gray-500 mt-3">$ {producto.precio === '' ? producto.precio : "No se encontro descripcion del precio"}</span>
                                <hr className="my-3" />
                                <div className="mt-2">
                                    <label className="text-gray-700 text-sm" htmlFor="count">Cantidad:</label>
                                    <div className="flex items-center mt-1">
                                        <button className="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-800" onClick={handleAddCantidad}>
                                            <svg className="h-5 w-5" fill="none" strokeLinecap="round"  strokeLinejoin="round"  strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        </button>
                                        <span className="text-gray-700 text-lg mx-2">{cantidad}</span>
                                        <button className="text-gray-500 focus:outline-none focus:text-gray-600 hover:text-gray-800" onClick={handleSubstracCantidad}>
                                            <svg className="h-5 w-5" fill="none" strokeLinecap="round"  strokeLinejoin="round"  strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <span className="text-gray-700 text-sm" >Descripcion:</span>
                                    <div className="flex items-center mt-1">
                                        <p className=''>{producto.descripcion}</p>
                                    </div>
                                </div>
                                <div className="flex items-center mt-6">
                                    <button type='button' className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded focus:outline-none focus:bg-indigo-500 hover:bg-indigo-800" 
                                    onClick={(e) => handleAddProducto(producto.idProducto,producto.nameProducto,producto.image, cantidad, producto.precio)}>
                                        Ordenar en Tienda
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16">
                            <h3 className="text-gray-600 text-2xl font-medium">Productos Similares</h3>
                            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
                                {
                                    moreProductos.map( moreProd => (
                                        <div className="inline-block px-3" key={moreProd.idProducto}>
                                            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out">
                                                <div className="w-full p-6 flex flex-col">
                                                    <Link to={`/categorias/productos/${moreProd.idProducto}`} >
                                                        <div>
                                                            <div className='flex justify-center'>
                                                                <img src={ `http://admin.ctodelpacifico.com/storage/${moreProd.image}` } className='h-40 w-40 hover:grow hover:shadow-lg' alt={moreProd.nameProducto} />
                                                            </div>
                                                            <div className="pt-3 flex items-center justify-between">
                                                                <div>
                                                                    <p className="text-sm">{moreProd.nameProducto}</p>
                                                                </div>
                                                                <div>
                                                                    <svg className="animate-bounce h-6 w-6 text-red-600 hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
                                                                </div>
                                                            </div>
                                                            {/*<p className="pt-1 text-gray-900">$ {prod.precio}</p>*/}
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>     
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
