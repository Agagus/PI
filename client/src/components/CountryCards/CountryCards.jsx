import React from 'react';
import { Link } from 'react-router-dom';

const CountryCards = ({ flags, name, continent, id}) => {
    return (
        <div>
            <img src={flags}/>
            <Link to={`/countries/${id}`}>
                <h4>{name}</h4>
            </Link>
            <p>{continent}</p>
            <p>{id}
            </p>
            <hr></hr>
        </div>
    )
}

export default CountryCards;