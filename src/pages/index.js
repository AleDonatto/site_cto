import * as React from "react"
import { Layout } from "../componets/Layout"
import { Routers } from "../componets/Routers"
import { Provider } from "react-redux"
import "../styles/global.css"
import { Store } from "../componets/reducers/Store"

const IndexPage = () => {
  return (
    <Provider store={Store}>
      <Layout>
        <Routers />
      </Layout>
    </Provider>
  )
}

export default IndexPage
