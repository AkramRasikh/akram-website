// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps } from "gatsby"

type DataProps = {
  site: {
    buildTime: string
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = () => (
  <div>
    <h1>Akram's CV</h1>
  </div>
)

export default IndexPage
