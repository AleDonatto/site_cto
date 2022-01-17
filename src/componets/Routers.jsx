import React from 'react'
import { Router } from "@reach/router"
import { HomePage } from './pages/HomePage'
import { CategoriaProductosPage } from './pages/CategoriaProductosPage'
import { ProductosPage } from './pages/ProductosPage'

export const Routers = () => {
    return (
        <div>
            <Router basepath="/">
                <HomePage path="/"></HomePage>
                <CategoriaProductosPage path="/categorias/:id" ></CategoriaProductosPage>
                <ProductosPage path="/categorias/productos/:id" ></ProductosPage>
            </Router>
        </div>
    )
}