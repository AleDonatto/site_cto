import * as React from "react"
import { About } from "../componets/About"
import { Categories } from "../componets/Categories"
import { CheapProducts } from "../componets/CheapProducts"
import { Layout } from "../componets/Layout"
import { Navbar } from "../componets/Navbar"
import { NewProducts } from "../componets/NewProducts"
import { Seo } from "../componets/Seo"
import { Slider } from "../componets/Slider"
import "../styles/global.css"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="CTO del Pacifico" lang="es" />
      <Navbar/>
      <Slider/>

      <NewProducts />
      <CheapProducts />
      <Categories />
      <About />
    </Layout>
  )
}

export default IndexPage
