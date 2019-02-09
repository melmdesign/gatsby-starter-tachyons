import React from 'react'
import { Link } from "gatsby"
import './custom.css'

const IndexPage = () => (
  <div>
    <h1 className="fw5 sans-serif">Liam Murphy</h1>
    <p class="fs-normal">Lead Product Designer @Donut</p>
    <Link to="/page-2/">View my work.</Link>
  </div>
)

export default IndexPage
