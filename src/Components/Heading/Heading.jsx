import React from 'react'
import './Heading.css'

const Heading = ({ title, para }) => {
    return (
        <>
            <h1 className='heading'>{title}</h1>
            <p className='para-text'>{para}</p>
        </>
    )
}

export default Heading
