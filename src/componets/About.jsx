import React from 'react'

export const About = () => {
    return (
        <div>
            <section id='about' className="bg-white py-8">
                <div className="container py-8 px-6 mx-auto">
                    <p className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl mb-8">
                        Acerca de Nosotros
                    </p>

                    <p className="mt-8 mb-8">
                        Somos una empresa dedicada a la venta de toner, tintas, rollos termicos, rollo bond y papapeleria en genaral,
                        hacemos cotizaciones con servicios de redes, camaras, instalacion de equipos de oficina y paginas web.
                        <br/>
                    </p>
                </div>
            </section>

            <footer className="container mx-auto bg-white py-8 border-t border-gray-400">
                <div className="container flex px-3 py-8 ">
                    <div className="w-full mx-auto flex flex-wrap">
                        <div className="flex w-full lg:w-1/2 ">
                            <div className="px-3 md:px-0">
                                <h3 className="font-bold text-gray-900">Direccion</h3>
                                <p className="pt-4 font-sans font-medium">
                                    Ejército Nacional MZ3 LT10, Nuevo centro de población, 39860.
                                </p>
                                <p className='font-sans font-medium'>Acapulco de Juárez, Gro</p>
                                <p className='font-sans font-medium'>Tel: 744 137 5110</p>
                                <p className='font-sans font-medium'>L-V de 9:00 am - 17:00 pm </p>
                                <p className='font-sans font-medium'>S de 9:00 am - 15:00 pm</p>
                            </div>
                        </div>
                        <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
                            <div className="px-3 md:px-0">
                                <h3 className="font-bold text-gray-900">Redes Sociales</h3>
                                <ul className="list-reset items-center pt-3">
                                    <li>
                                        <a href='https://www.facebook.com/CTO-del-Pac%C3%ADfico-107470631794298/?ref=py_c' className="inline-block no-underline text-blue-500 hover:text-blue-600 hover:underline py-1">Facebook</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
