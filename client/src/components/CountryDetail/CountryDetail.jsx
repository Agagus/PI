import React from "react";
import { useEffect , useDispatch , useSelector} from 'react'
import { getCountryDetail } from "../../redux/actions/index";

const CountryDetail = (props) => {

    const country = useSelector((state) => state);

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getCountryDetail(props.id));
    })

    return(
        <>
            <li>
                <ul>{country.flags}</ul>
                <ul>{country.name}</ul>
                <ul>{country.id}</ul>
                <ul>{country.continent}</ul>
                <ul>{country.capital}</ul>
                <ul>{country.subregion}</ul>
                <ul>{country.area}</ul>
                <ul>{country.population}</ul>
                <ul>{country.activities}</ul>
            </li>
            {}
        </>
    )

}

export default CountryDetail;