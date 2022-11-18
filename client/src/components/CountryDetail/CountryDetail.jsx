import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { getCountryDetail } from "../../redux/actions";


 export const CountryDetail = () => {

    const countryDetail = useSelector((state) => state.countryDetail)

    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(()=> {
        dispatch(getCountryDetail(id), [dispatch, countryDetail])
        
    })

    return (
        <div>
            <img src = {countryDetail.flags} />
            <h2>{countryDetail.name}</h2>
            <h4>{countryDetail.continent}</h4>
            
                <ul>{countryDetail.id}</ul>
                <ul>{countryDetail.capital}</ul>
                <ul>{countryDetail.subregion}</ul>
                <ul>Population: {countryDetail.population}</ul>
                <ul>Area: {countryDetail.area} km2</ul>
                <ul>{countryDetail.activities}</ul>

        </div>
    )

}

// export default CountryDetail2;