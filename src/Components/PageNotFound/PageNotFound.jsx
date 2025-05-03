import React from 'react'
import { Link } from 'react-router-dom'

const PNFstyle = {
    display : "flex",
    flexDirection : "column",
    alignItem : "center",
    justifyContent : "center",
    textAlign : "center",
    marginTop : "20%"
}

const PageNotFound = () => {
  return (
    <div style={PNFstyle}>
      <h1>Page Not Found</h1>
      <h2>404 Error</h2>
      <h2><Link to="/" style={{color:"#fff"}}>Go to Home</Link></h2>
    </div>
  )
}

export default PageNotFound
