import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom";
import { cleanPage, getCountryDetail } from "../../redux/actions/index";


 export const CountryDetail = () => {

    const countryDetail = useSelector((state) => state.countryDetail)

    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(()=> {
        dispatch(getCountryDetail(id))

        // return dispatch(cleanPage())
        },
        [dispatch, id]
    )

    return (
        <div>
            <Link to='/countries'>
                <button>BACK</button>
            </Link>
            <hr></hr>
            <img src = {countryDetail.flags} />
            <h2>{countryDetail.name}</h2>
            {/* <h4>{countryDetail.continent}</h4> */}
            
                <ul>{countryDetail.id}</ul>
                <ul>{countryDetail.capital}</ul>
                <ul>{countryDetail.continent}, {countryDetail.subregion}</ul>
                <ul>Population: {countryDetail.population} inhabitants</ul>
                <ul>Area: {countryDetail.area} km2</ul>
                <ul>{countryDetail.activities}</ul>

        </div>
    )

}

// export default CountryDetail2;