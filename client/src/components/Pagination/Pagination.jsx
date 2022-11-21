import React from "react";
import style from "./Pagination.module.css"
// pagina = la pagina actual en la que estamos parados ( 1, 2, 3, etc...) <- pertence al estado

// 15 = cantidad de datos que queremos mostrar por pagina

// for(var i = 15*pagina-15; i<15*pagina; i++){
//     render( miArregloDeDatos[i] )
// }

export const Pagination = ({countries, countriesPerPage, paginated}) => {
    const pages = [];
    
    for(let i=0; i<=Math.floor(countries / countriesPerPage); i++){
        pages.push(i+1);
    }
    
    return(
        <div className={style.div}>
            { pages && pages.map(page => (
                
                <button onClick={() => paginated(page)} className={style.btn}>{page}</button>
                
            ))}

        </div>
            
    )
}


