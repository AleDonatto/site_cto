import React, { useEffect, useState } from 'react'
import { Layout } from '../Layout'
import { Navbar } from '../Navbar'
import { Seo } from '../Seo'
import { Link } from 'gatsby'
//import ReactPaginate from 'react-paginate';

export const CategoriaProductosPage = ({idCategoria}) => {
    const categoriaId = idCategoria
    const [productos, setproductos] = useState([])
    const [categoria, setcategoria] = useState([])
    const [productosFilter, setprductosFilter] = useState([])
    const [search, setsearch] = useState("")
    const [showSearch, setshowSearch] = useState(false)
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

    const handleChange = (e) => {
        e.target.value === "" ? setshowSearch(false) : setshowSearch(true)
        setsearch(e.target.value)
        const filter = productos.filter(prod => prod.nameProducto.toLowerCase().match(search.toLowerCase()) || prod.descripcion.toLowerCase().match(search.toLowerCase()) || prod.codigo.toLowerCase().match(search.toLowerCase()) )
        setprductosFilter(filter)
    }

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

                            <input className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline" type="text" placeholder="Search" onChange={handleChange}/>
                        </div>
                    </div>
                </div>
            </div>
            
            {
                showSearch 
                ? 
                <div className='grid grid-cols-4 bg-white py-10 px-10'>
                    {
                        productosFilter.map( prodFil => (
                            <div className='px-5 py-5 bg-white grid gap-5' key={prodFil.idProducto}>
                                <Link to={`/categorias/productos/${prodFil.idProducto}`}>
                                    <div className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
                                        <div>
                                            <img src={'http://admin.ctodelpacifico.com/storage/'+prodFil.image} className='bg-white' alt={prodFil.nameProducto} />
                                        </div>
                                        <div className="py-4 px-4 bg-white">
                                            <p className='text-gray-500 text-sm text-center'>SKU: {prodFil.codigo} </p>
                                            <h3 className="text-sm font-semibold text-gray-600 text-ellipsis overflow-hidden">{prodFil.nameProducto}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                : 
                <div className='grid grid-cols-4 bg-white py-10 px-10'>
                    {
                        productos.map( prod => (
                            <div className='px-5 py-5 bg-white grid gap-5' key={prod.idProducto}>
                                <Link to={`/categorias/productos/${prod.idProducto}`}>
                                    <div className="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer">
                                        <div>
                                            <img src={'http://admin.ctodelpacifico.com/storage/'+prod.image} className='bg-white' alt={prod.nameProducto} />
                                        </div>
                                        <div className="py-4 px-4 bg-white">
                                            <p className='text-gray-500 text-sm text-center'>SKU: {prod.codigo} </p>
                                            <h3 className="text-sm font-semibold text-gray-600 text-ellipsis overflow-hidden">{prod.nameProducto}</h3>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            }

        </Layout>
    )
}
