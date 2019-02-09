import React from 'react'
import { Link } from "gatsby"
import './custom.css'

const IndexPage = () => (
  <div>
    <h1 className="fw5 sans-serif">Liam Murphy</h1>
    <p>Lead Product Designer @Donut</p>
    <Link to="/work/">View my work.</Link>
  </div>
)

export default IndexPage
