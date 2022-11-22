import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom";
import { getCountryDetail } from "../../redux/actions/index";
import style from './CountryDetail.module.css'


export const CountryDetail = () => {

    const countryDetail = useSelector((state) => state.countryDetail)

    const dispatch = useDispatch();

    const { id } = useParams();

    useEffect(() => {
        dispatch(getCountryDetail(id))

    },
        [dispatch, id]
    )

    return (
        <div className={style.div}>
            <div className={style.nav}>
                <Link to='/countries'>
                    <button className={style.button}>BACK</button>
                </Link>
            </div>
            <div className={style.cards}>
                <div className={style.card}>
                    <img src={countryDetail.flags} className={style.img} />
                    <h4 className={style.name}>{countryDetail.name} ({countryDetail.id})</h4>
                    <div className={style.details}>
                        <p>Capital: {countryDetail.capital}</p>
                        {console.log(countryDetail)}
                        <p>{countryDetail.continent}, {countryDetail.subregion}</p>
                        <p>Population: {countryDetail.population} inhabitants</p>
                        <p>Area: {countryDetail.area} km2</p>
                        <div>
                            {countryDetail && countryDetail.activities &&
                                countryDetail.activities.map(act => {
                                    return (
                                        <p>Activities: {act.name}</p>
                                    )
                                })
                            }

                        </div>

                    </div>
                </div>
                
                <div>
                    { countryDetail && countryDetail.activities && 
                        countryDetail.activities.map(act => {
                            return (
                                <div className={style.card}>
                                    <h4 className={style.name}>{act.name}</h4>
                                    <div className={style.details}>
                                        <p>Difficulty: {act.difficulty}</p>
                                        <p>Duration: {act.duration}</p>
                                        <p>Season: {act.season}</p>
                                    </div>
                                </div>
                                )
                        }) }

                </div>
            </div>
        </div>

    )

}
