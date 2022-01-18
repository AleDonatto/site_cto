import React, { useEffect, useRef, useState } from 'react'  
import { StaticImage } from 'gatsby-plugin-image'
import { useLocation } from "@reach/router"

export const Navbar = (props) => {
    const location = useLocation();
    const header = useRef()
    const navcontent = useRef()
    const navaction = useRef()
    const toToggle = useRef()

    const [scrollpos, setscrollpos] = useState(0)

    useEffect(() => {
        const onScroll = () => setscrollpos(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const headerLocal = header
        const toToggleLocal = toToggle
        const navcontentLocal = navcontent
        if(scrollpos > 20){

            if(location.pathname === "/"){
                headerLocal.current.classList.add('bg-white')
                //navaction.current.classList.remove("bg-white");
                //navaction.current.classList.add("gradient");
                //navaction.current.classList.remove("text-gray-800");
                //navaction.current.classList.add("text-white");
                
                toToggleLocal.current.classList.add("text-gray-800")
                toToggleLocal.current.classList.remove("text-white")

                headerLocal.current.classList.add("shadow");
                navcontentLocal.current.classList.remove("bg-gray-100");
                navcontentLocal.current.classList.add("bg-white");
            }else{
                headerLocal.current.classList.add('bg-white')
                headerLocal.current.classList.add("shadow");
                toToggleLocal.current.classList.add("text-gray-800")
                toToggleLocal.current.classList.remove("text-white")
            }
        }
        else{
            if(location.pathname === '/'){
                
                headerLocal.current.classList.remove("bg-white");
                //navaction.current.classList.remove("gradient");
                //navaction.current.classList.add("bg-white");
                //navaction.current.classList.remove("text-white");
                //navaction.current.classList.add("text-gray-800");

                toToggleLocal.current.classList.add("text-white")
                toToggleLocal.current.classList.remove("text-gray-800")

                headerLocal.current.classList.remove("shadow");
                navcontentLocal.current.classList.remove("bg-white");
                navcontentLocal.current.classList.add("bg-gray-100");
            }else{
                //navaction.current.classList.add("text-gray-800");
                navcontentLocal.current.classList.add("bg-gray-100");
                toToggleLocal.current.classList.add("text-gray-800")
                navcontentLocal.current.classList.remove("bg-white");
            }
        }
        return () => {}
    }, [scrollpos, location])
    
    return (
        <div>
            <nav ref={header} className="fixed w-full z-30 top-0 text-white">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 px-5">
                    <div className="pl-4 flex items-center">
                        <a ref={toToggle} className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
                            <StaticImage src="../images/cto.png" width={50} height={50} className="fill-current text-white mr-2" alt="logo cto" />
                            <small className='ml-2'>CTO DEL PACIFICO</small> 
                        </a>
                    </div>
                    <div className="block lg:hidden pr-4">
                        <button id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                        </button>
                    </div>
                    <div ref={navcontent} className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
                        {
                            location.pathname === "/"
                            ?
                            <ul className="list-reset lg:flex justify-end flex-1 items-center">
                                <li className="mr-3">
                                    <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="/">Home</a>
                                </li>
                                <li className="mr-3">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="/#store">Productos</a>
                                </li>
                                <li className="mr-3">
                                    <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="/#about">Nosotros</a>
                                </li>
                            </ul>
                            :
                            <ul className="list-reset lg:flex justify-end flex-1 items-center">
                                <li className="mr-3">
                                    <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="/">Home</a>
                                </li>
                            </ul>

                        }
                        <button ref={navaction} id="navAction" className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            <a href="http://admin.ctodelpacifico.com/">
                                <svg className="fill-current text-gray-500 font-bold hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <circle fill="none" cx="12" cy="7" r="3" />
                                    <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z" />
                                </svg>
                            </a>
                        </button>
                    </div>
                </div>
                <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
            </nav>
        </div>
    )
}
