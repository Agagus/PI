import React from "react"
import { Link } from "react-router-dom"

// const goToHome = ()=> {
//     <Link to='/countries'>Home</Link>
// }


export const LandingPage = ()=> {
    return(
        <div>
            <Link to='/countries'>Home</Link>

            {/* onClick = {goToHome()} */}
            <h2>Welcome!</h2>
        </div>
    )
}