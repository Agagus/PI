import React from "react"
import { Link } from "react-router-dom"
import style from "./LandingPage.module.css"


export const LandingPage = ()=> {
    return(
        <div className={style.page}>
            <h2>W e l c o m e !</h2>
            <button className={style.button}>
                <Link to='/countries' className={style.link}>Home</Link>
            </button>
        </div>
    )
}