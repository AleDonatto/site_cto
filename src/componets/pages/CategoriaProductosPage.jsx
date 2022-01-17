import React, { useEffect, useState } from 'react'
import { Layout } from '../Layout'
import { Navbar } from '../Navbar'
import { Seo } from '../Seo'
//import ReactPaginate from 'react-paginate';

export const CategoriaProductosPage = ({idCategoria}) => {
    const categoriaId = idCategoria
    const [productos, setproductos] = useState([])
    const [categoria, setcategoria] = useState([])
    //const [data, setdata] = useState([])
    //const [pagination, setpagination] = useState(1)

    useEffect(() => {
        fetch(`http://admin.ctodelpacifico.com/api/getProductosxCategoria/${categoriaId}`)
        //fetch(`http://127.0.0.1:8001/api/getProductosxCategoria/${categoria}`)
        .then( response => response.json())
        .then(resultData => {
            setproductos(resultData.productos)
            setcategoria(resultData.categoria) 
        } )
    }, [categoriaId])

    /*const handlePageChange = (page) => {
        setpagination(page);
    }*/
    
    return (
        <Layout>
            <Seo title="CTO del Pacifico" lang="es" />
            <Navbar/>
            <div className='container mx-auto px-10 pt-10 mt-14'>
                <div className="grid grid-cols-2">
                    <div className="">
                        <h2 className='font-semibold text-lg'>Categoria: {categoria.nameCategoria} </h2>
                    </div>
                    <div className="">
                        <div className="relative max-w-lg mx-auto">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                <svg className="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor"  strokeWidth={2} strokeLinecap="round"  strokeLinejoin="round"/>
                                </svg>
                            </span>

                            <input className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline" type="text" placeholder="Search" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 bg-white py-10 px-10'>
                {
                    productos.map( prod => (
                        <div className='px-5 py-5 bg-white grid gap-5'>
                            <div className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
                                <div>
                                    <img src={'http://admin.ctodelpacifico.com/storage/'+prod.image} className='bg-white' alt="" />
                                </div>
                                <div className="py-4 px-4 bg-white">
                                    <p className='text-gray-500 text-sm text-center'>SKU: {prod.codigo} </p>
                                    <h3 className="text-sm font-semibold text-gray-600 truncate">{prod.nameProducto}</h3>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/*<div>
                <ul className="flex pl-0 list-none rounded my-2">
                    <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200"><a className="page-link" href="#">Previous</a></li>
                    <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200"><a className="page-link" href="#">1</a></li>
                    <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200"><a className="page-link" href="#">2</a></li>
                    <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200"><a className="page-link" href="#">3</a></li>
                    <li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 rounded-r hover:bg-gray-200"><a className="page-link" href="#">Next</a></li>
                </ul>
                <p>{productos.total}</p>
                <p>{productos.per_page}</p>
                <p>{productos.curren_page}</p>
                <p>{productos.last_page}</p>
            </div>*/}

            {/*<div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next >"
                    onPageChange={handlePageChange}
                    pageRangeDisplayed={5}
                    pageCount={4}
                    previousLabel="< Previous"
                    renderOnZeroPageCount={true}
                    className="flex pl-0 list-none rounded my-2"
                    breakClassName="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200"
                    breakLinkClassName ="page-link"
                />
            </div>*/}
        </Layout>
    )
}
