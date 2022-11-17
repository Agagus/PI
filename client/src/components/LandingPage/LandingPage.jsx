import React from "react"
import { Link } from "react-router-dom"
import style from "./LandingPage.module.css"


export const LandingPage = ()=> {
    return(
        <div className={style.page}>
            <button className={style.button}>
                <Link to='/countries'>Home</Link>
            </button>
            <h2>Welcome!</h2>
        </div>
    )
}