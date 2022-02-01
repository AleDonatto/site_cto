import React from 'react'
import { About } from '../About'
import { Categories } from '../Categories'
import { CheapProducts } from '../CheapProducts'
import { Navbar } from '../Navbar'
import { NewProducts } from '../NewProducts'
import { Seo } from '../Seo'
import { Slider } from '../Slider'

export const HomePage = () => {
    return (
        <>
            <Seo title="CTO del Pacifico" lang="es" />
            <div className='leading-normal tracking-normal gradient' >
                <Navbar numero={[]}/>
                <Slider/>

                <NewProducts />
                <CheapProducts />
                <Categories />
                <About />
            </div>
        </>
    )
}
