import React from 'react';

const CountryCards = ({ flags, name, continent, id}) => {
    return (
        <div>
            <img src={flags}/>
            <h4>{name}</h4>
            <p>{continent}</p>
            <p>{id}</p>
            <hr></hr>
        </div>
    )
}

export default CountryCards;