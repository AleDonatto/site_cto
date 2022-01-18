import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

export const NewProducts = () => {
    const [productos, setproductos] = useState([])

    useEffect(() => {
        // get data from GitHub api
        fetch(`http://admin.ctodelpacifico.com/api/getProductosNuevos`)
        .then(response => response.json()) // parse JSON from request
        .then(resultData => {
            setproductos(resultData.productosNuevos)
        }) // set data for the number of stars
    }, [])

    return (
        <div>
            <section id='store' className="bg-white py-4">

                <div className="container mx-auto pt-4">
                    <div className="grid grid-cols-2">
                        <div>
                            <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                                    <p className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl ">Productos Nuevos</p>
                                </div>
                            </nav>
                        </div>
                        <div>
                            <div className='w-full z-30 top-0 px-6 py-1'>
                                <div className='w-full container mx-auto flex justify-end mt-0 px-2 py-3'>
                                    <a className='text-base text-blue-500 hover:text-blue-600' href="/categorias/allProductos">Ver todos </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col bg-white m-auto p-auto">
                    <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                        <div className="flex flex-nowrap ">

                            {
                                productos.map( prod => (
                                    <div className="inline-block px-3" key={prod.idProducto}>
                                        <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out">
                                            <div className="w-full p-6 flex flex-col">
                                                <Link to={`/categorias/productos/${prod.idProducto}`} >
                                                    <div>
                                                        <div className='flex justify-center'>
                                                            {/*<StaticImage src="../images/img1.jpg" className="h-40 w-40 hover:grow hover:shadow-lg" alt="producto" /> */}
                                                            <img src={ 'http://admin.ctodelpacifico.com/storage/'+prod.image } className='h-40 w-40 hover:grow hover:shadow-lg' alt={prod.nameProducto} />
                                                        </div>
                                                        <div className="pt-3 flex items-center justify-between">
                                                            <div>
                                                                <p className="text-sm">{prod.nameProducto}</p>
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

            </section>

        </div>
    )
}
