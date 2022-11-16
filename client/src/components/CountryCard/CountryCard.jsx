import React from 'react';


const CountryCard = (props) => {
    return (
        <div>     
            <img src={props.flags} alt='Country Flag'/>
            <h4>{props.name}</h4>
            <h5>{props.id}</h5>
            <h5>{props.capital}</h5>
            <li>
                <ul>Continent: {props.continent}</ul>
                <ul>Subregion: {props.subregion}</ul>
                <ul>Population: {props.population}</ul>
                <ul>Area: {props.area} km2</ul>
                <ul>Activities: {props.activities}</ul>
            </li>
        </div>
    )
}

export default CountryCard;