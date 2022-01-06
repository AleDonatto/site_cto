import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

export const Categories = () => {

    const [categorias, setcategorias] = useState([])

    useEffect(() => {
        fetch(`http://admin.ctodelpacifico.com/api/getCategorias`)
        .then(response => response.json())
        .then(resultData => {
            setcategorias(resultData.categorias)
        } )
    }, [])
    
    return (
        <div>
            {
                categorias.length === 0 
                ? 
                    <div></div>
                : 
                    <section id='categories' className="bg-white py-4">
                        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">

                            <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                                    <p className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl">Categorias</p>
                                </div>
                            </nav>

                            {
                                
                                categorias.map(cat =>(
                                    /*<div className='w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col'>
                                        <a href="#" className='shadow-2xl rounded-lg'>
                                            <div className='pt-3 flex items-center justify-beetween'>
                                                <div className='p-6'>
                                                    <p className='text-center text-blue-500'>{cat.nameCategoria}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>*/

                                    <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                                        <Link to={cat.nameCategoria} className='shadow-2xl rounded-lg'>
                                            <div className='grid grid-flow-row auto-rows-max'>
                                                <div className='pt-2 flex justify-center'>
                                                    {/*<StaticImage src='"http://127.0.0.1:8001/"+cat.image' className="h-20 w-20 hover:grow hover:shadow-lg" alt="producto" /> */}
                                                    <img src={'http://admin.ctodelpacifico.com/storage/'+cat.image} className="h-20 w-20 hover:grow hover:shadow-lg" alt="producto" /> 
                                                </div>
                                                <div className="p-2">
                                                    <p className="font-bold text-lg text-center text-blue-500">{cat.nameCategoria}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }

                        </div>
                    </section> 
            }
        </div>
    )
}
