import * as React from "react"
import { Layout } from "../componets/Layout"
import { Routers } from "../componets/Routers"
import "../styles/global.css"

const IndexPage = () => {
  return (
    <Layout>
      <Routers />
      {/*<Seo title="CTO del Pacifico" lang="es" />
      <Navbar/>
      <Slider/>

      <NewProducts />
      <CheapProducts />
      <Categories />
      <About />*/}
    </Layout>

  )
}

export default IndexPage
