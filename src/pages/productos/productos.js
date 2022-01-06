import * as React from "react"
import { Layout } from "../../componets/Layout"
import { Navbar } from "../../componets/Navbar"
import { Seo } from "../../componets/Seo"
import { Working } from "../../componets/Working"
import "../../styles/global.css" 

const ProductosPage = () => {
  return (
    <Layout>
      <Seo title="CTO del Pacifico" lang="es" />
      <Navbar/>
      <Working/>
    </Layout>
  )
}

export default ProductosPage
