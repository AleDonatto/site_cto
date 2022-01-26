import * as React from "react"
import { Layout } from "../componets/Layout"
import { Routers } from "../componets/Routers"
import { Provider } from "react-redux"
import "../styles/global.css"
import { store } from "../componets/reducers/store"

const IndexPage = () => {
  return (
    <Provider store={store}>
      <Layout>
        <Routers />
      </Layout>
    </Provider>
  )
}

export default IndexPage
