import React from 'react';
import { Link } from 'react-router-dom';
import style from './CountryCards.module.css'

const CountryCards = ({ flags, name, continent, id}) => {
    return (
        <div className={style.container}>
            <Link to={`/countries/${id}`} className= {style.link}>
                <img src={flags} className= {style.img} alt = 'Country flag'/>
                <div>
                    <h4>{name}  ({id})</h4>
                <p>{continent}</p>
            </div>
            </Link>
        </div>
    )
}

export default CountryCards;