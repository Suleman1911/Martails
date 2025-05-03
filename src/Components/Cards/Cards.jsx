import React from 'react'
import './Cards.css'

const iconStyle = {
  display : "flex",
  alignItem : "center",
  justifyContent : "center",
  color : "#dc3545",
  gap : "5px",
}

const Cards = (props) => {
  return (
    <>
      <div className="card">
       <img src={props.image} alt="" />
       <h3>{props.title?props.title:"Boxing Practice"}</h3>
       <p>{props.description?props.description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore delectus odit assumenda ipsum vel veritatis!"}</p>
       <div style={iconStyle}>{props.children ? props.children :"Read More"}</div>
      </div>
    </>
  )
}

export default Cards
