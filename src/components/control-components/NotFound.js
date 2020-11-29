import React from 'react'

const NotFound = () => {
    return (
        <div style={{display: "flex", flexDirection:"column", justifyContent:"center", textAlign:"center"}}>
            <p style={{color: "lightgray", fontSize:"5rem", marginBottom:"0"}}>404</p>
            <p style={{color: "lightgray", fontSize:"3rem", letterSpacing:"0.1rem", margintop:"0"}}>CONTENT NOT FOUND</p>
        </div>
    )
}

export default NotFound