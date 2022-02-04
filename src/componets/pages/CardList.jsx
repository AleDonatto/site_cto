import React, { useEffect, useState } from 'react';
import { Navbar } from '../Navbar';
import { consProductos, enviarListaProductos, deleteProducto, clearStorage } from '../actions/actionsProductos'
import { Link } from 'gatsby';
import { Seo } from '../Seo';
import Swal from 'sweetalert2';
import { navigate } from "@reach/router"

export const CardList = () => {

    const [listaProductos, setlistaProductos] = useState([]);
    const [datosCliente, setdatosCliente] = useState({
        nombre: '',
        telefono: 0
    });

    const styleImage = {
        height: '3rem',
        width: '4rem',
    }

    useEffect(() => {
        const lista = consProductos()
        setlistaProductos(lista)

        return () => {};
    }, []);

    const handleInputChange = (event) => {
        const input = event.target.name
        const value = event.target.value

        setdatosCliente({
            ...datosCliente,
            [input]: value
        })
    }

    const handleSendProductos = (nombre, telefono) => {
        if(nombre === '' || telefono === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Completa los campos Nombre y Telefono!'
            })
        }else{
            const mensaje = enviarListaProductos(datosCliente.nombre, datosCliente.telefono)

            Swal.fire({
                title: 'God Job!',
                text: mensaje.toString(),
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: '#3085d6',
                //cancelButtonColor: '#d33',
                confirmButtonText: 'Entendido!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/")
                }
                navigate("/")
            })
        }
    }

    const handleDeleteProducto = (index) => {
        deleteProducto(index)
        const lista = consProductos()
        setlistaProductos(lista)
    }

    const handleClearCarrito = () => {
        clearStorage()
        const lista = consProductos()
        setlistaProductos(lista)
    }
    
    return (
        <div>
            <Seo title="CTO del Pacifico | Lista de Compras" lang="es" />
            <Navbar numero={[]} />

            {
                listaProductos.length === 0
                ?
                <div className='mt-10 py-10 bg-white'>
                    <div className='flex justify-center my-6'>
                        <h2 className='text-gray-400 text-2xl font-sans'>No tienes productos agragados</h2>
                    </div>
                </div>
                :    
                <div className='mt-10 py-10 bg-white'>
                    <div className="flex justify-center my-6">
                        <div className="flex flex-col w-full p-8 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5">
                            <div className="flex-1">
                                <table className="w-full text-sm lg:text-base" cellSpacing={0}>
                                    <thead>
                                        <tr className="h-12 uppercase">
                                            <th className="hidden md:table-cell"></th>
                                            <th className="text-left">Producto</th>
                                            <th className="lg:text-right text-left pl-5 lg:pl-0">
                                                <span className="lg:hidden" title="Quantity">Cant</span>
                                                <span className="hidden lg:inline">Cantidad</span>
                                            </th>
                                            <th className="hidden text-right md:table-cell">
                                                <span className="lg:hidden" title="Quantity">P. U.</span>
                                                <span className="hidden lg:inline">Precio</span>
                                            </th>
                                            <th className="text-right">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            listaProductos.map( (list,index) => (
                                                <tr key={index.toString()}>
                                                    <td className='hidden pb-4 md:table-cell'>
                                                        <Link to={`/categorias/productos/${list.id}`}>
                                                            <img src={'http://admin.ctodelpacifico.com/storage/'+list.image} alt={list.nombre} style={styleImage} />
                                                        </Link>
                                                    </td>
                                                    <td>
                                                        <p className='mb-2 md:ml-2 text-ellipsis overflow-hidden'>{list.nombre}</p>
                                                        <button type="button" onClick={() => handleDeleteProducto(index)} className="text-gray-700 md:ml-4 hover:text-red-700">
                                                            <small>(Eliminar Producto)</small>
                                                        </button>
                                                    </td>        
                                                    <td className="justify-center md:justify-end md:flex mt-6">
                                                        <div className="w-20 h-10">
                                                            <div className="relative flex flex-row w-full h-8">
                                                                <p className='w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black'>{list.cantidad}</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="hidden text-right md:table-cell">
                                                        <span className="text-sm lg:text-base font-medium m-2">
                                                            S/D
                                                        </span>
                                                    </td>
                                                    <td className="text-right">
                                                        <span className="text-sm lg:text-base font-medium m-2">
                                                            S/D
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                                <hr className="pb-6 mt-6" />

                                <div className='grid justify-items-end'>
                                    <button type='button' onClick={handleClearCarrito} className='bg-gray-200 hover:bg-gray-300 p-2 rounded-full'>
                                        <span className="ml-2 mt-5px">Vaciar lista de compras</span>
                                    </button>
                                </div>
                                
                                <hr className="pb-6 mt-6" />
                                <div className="my-4 mt-6 -mx-2 lg:flex">
                                    <div className="lg:px-2 lg:w-1/2">
                                        
                                        <div className="p-4 bg-gray-100 rounded-full">
                                            <h1 className="ml-2 font-bold uppercase">Detalles del comprador</h1>
                                        </div>
                                        <div className="p-4">
                                            <p className="mb-4 italic">Ingrese su nombre y un numero de telefono para que se pongan en contacto con usted despues de realizar su pedido</p>
                                            <label htmlFor="nombre">Nombre Cliente</label>
                                            <input id="nombre" name='nombre' className='w-full h-10 p-2 bg-gray-100 rounded' type="text" required  onChange={handleInputChange}/>
                                            <label htmlFor="telefono">Tel. Celular</label>
                                            <input id="telefono" name='telefono' className='w-full h-10 mt-2 p-2 bg-gray-100 rounded' type="text" required onChange={handleInputChange} />
                                        </div>
                                    </div>
                                    <div className="lg:px-2 lg:w-1/2">
                                        <div className="p-4 bg-gray-100 rounded-full">
                                            <h1 className="ml-2 font-bold uppercase">Datalles de Orden</h1>
                                        </div>
                                        <div className="p-4">
                                            <p className="mb-6 italic">Sus productos estaran listos para recoger en tienda</p>
                                            <div className="flex justify-between border-b">
                                                <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                                    Subtotal
                                                </div>
                                                <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                                    $ s/d
                                                </div>
                                            </div>
                                            <div className="flex justify-between pt-4 border-b">
                                                <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                                    IVA
                                                </div>
                                                <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                                    $ s/d
                                                </div>
                                            </div>
                                            <div className="flex justify-between pt-4 border-b">
                                                <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-800">
                                                    Total
                                                </div>
                                                <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                                                    $ s/d
                                                </div>
                                            </div>
                                            <button type='button' className="flex justify-center w-full px-10 py-3 mt-6 font-medium text-white uppercase bg-gray-800 rounded-full shadow item-center hover:bg-gray-700 focus:shadow-outline focus:outline-none"
                                            onClick={() => handleSendProductos(datosCliente.nombre, datosCliente.telefono)}>
                                                <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" className="w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"/>
                                                </svg>
                                                <span className="ml-2 mt-5px">Ordenar en Tienda</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

