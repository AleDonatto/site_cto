import React from 'react'
import { Router } from "@reach/router"
import { HomePage } from './pages/HomePage'
import { CategoriaProductosPage } from './pages/CategoriaProductosPage'
import { ProductosPage } from './pages/ProductosPage'
import { AllProducts } from './pages/AllProducts'

export const Routers = () => {
    return (
        <div>
            <Router basepath="/">
                <HomePage path="/" />
                <CategoriaProductosPage path="/categorias/:id" />
                <ProductosPage path="/categorias/productos/:id" />
                <AllProducts path="/categorias/allProductos" />
            </Router>
        </div>
    )
}