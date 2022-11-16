import React from "react"
import { Link } from "react-router-dom"



export const LandingPage = ()=> {
    return(
        <div>
            <Link to='/countries'>Home</Link>
            <h2>Welcome!</h2>
        </div>
    )
}