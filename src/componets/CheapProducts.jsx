import React, { useEffect, useState } from 'react'

export const CheapProducts = () => {

    const [cheapProductos, setcheapProductos] = useState([])

    useEffect(() => {
        fetch(`http://admin.ctodelpacifico.com/api/getProductosDescuento`)
        .then(response => response.json())
        .then(resultData => {
            setcheapProductos(resultData.productosDescuento)
        })
    }, [])

    return (
        <div>
            {
                cheapProductos.length === 0
                ?
                    <div></div>
                :  
                <section className='bg-white py-4'>
                    <div className="container mx-auto flex items-center flex-wrap pt-4">
                        <div className='w-full z-30 top-0 px-6 py-1'>
                            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                                <h2 className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl">Ofertas Limites</h2>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col bg-white m-auto p-auto">
                        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                            <div className="flex flex-nowrap ">

                                {
                                    cheapProductos.map(prod => (
                                        <div className="inline-block px-3">
                                            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 ease-in-out">
                                                <div className="w-full p-6 flex flex-col">
                                                    <div>
                                                        <div className='flex justify-center'>
                                                            {/*<StaticImage src="../images/img1.jpg" className="h-40 w-40 hover:grow hover:shadow-lg" alt="producto" /> */}
                                                            <img src={'http://admin.ctodelpacifico.com/storage/'+prod.image} className='h-40 w-40 hover:grow hover:shadow-lg' alt={prod.nameProducto} />
                                                        </div>
                                                        <div className="pt-3 flex items-center justify-between">
                                                            <p className="">{prod.nameProducto}</p>
                                                            <svg className="h-6 w-6 fill-current text-gray-500 hover:text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                                <path d="M12,4.595c-1.104-1.006-2.512-1.558-3.996-1.558c-1.578,0-3.072,0.623-4.213,1.758c-2.353,2.363-2.352,6.059,0.002,8.412 l7.332,7.332c0.17,0.299,0.498,0.492,0.875,0.492c0.322,0,0.609-0.163,0.792-0.409l7.415-7.415 c2.354-2.354,2.354-6.049-0.002-8.416c-1.137-1.131-2.631-1.754-4.209-1.754C14.513,3.037,13.104,3.589,12,4.595z M18.791,6.205 c1.563,1.571,1.564,4.025,0.002,5.588L12,18.586l-6.793-6.793C3.645,10.23,3.646,7.776,5.205,6.209 c0.76-0.756,1.754-1.172,2.799-1.172s2.035,0.416,2.789,1.17l0.5,0.5c0.391,0.391,1.023,0.391,1.414,0l0.5-0.5 C14.719,4.698,17.281,4.702,18.791,6.205z" />
                                                            </svg>
                                                            <svg class="animation-ping h-6 w-6 text-blue-500 hover:text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                                        </div>
                                                        {/*<p className="pt-1 text-gray-900">$ {prod.precio}</p>*/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>        
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    
                </section>
            }
        </div>
    )
}
