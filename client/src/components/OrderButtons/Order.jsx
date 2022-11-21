import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, getByContinent, getByActivity, getAlphabetical, getByPopulation, getAllCountries } from "../../redux/actions/index";
import style from "./Order.module.css"

export const Order = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.allCountries) //me traigo all en vez de countries
    const activities = useSelector(state => state.activities); 
    
    const [order, setOrder] = useState({
        countries,
        // asc: asc,
        // desc: desc,
        // ascP: ascP,
        // descP: descP,
    })

    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch])
    
    
    const handlerOrder = (e) => {
        setOrder({
            ...order,
            // countries: countries,
            [e.target.name] : e.target.value
        })

        if(e.target.name === 'asc') dispatch(getAlphabetical(e.target.value))
        if(e.target.name === 'desc') dispatch(getAlphabetical(e.target.value))
        if(e.target.name === 'ascP') dispatch(getByPopulation(e.target.value))
        if(e.target.name === 'descP') dispatch(getByPopulation(e.target.value))
    }


    const handlerContinent = (e) => {
        e.preventDefault();
        dispatch(getByContinent(e.target.value))
    }


    // const handlerOrderA = (e) => {
    //     e.preventDefault();
    //     dispatch(getAlphabetical(e.target.value))
    // }

    // const handlerOrderPop = (e) => {
    //     e.preventDefault();
    //     dispatch(getByPopulation(e.target.value))
    // }


    return (
        <div className={style.container}>
            <div>
                <span>
                    <select className= {style.btn} onChange = {e => handlerContinent(e)}>
                        <option select value='All'>All</option>
                        <option value='Africa'>Africa</option>
                        <option value='Antarctic'>Antarctic</option>
                        <option value='Asia'>Asia</option>
                        <option value='Europe'>Europe</option>
                        <option value='Oceania'>Oceania</option>
                        <option value='Americas'>Americas</option>
                    </select>
                </span>
                <span>
                    <select className= {style.btn}>
                        <option value = 'All'>All</option>                
                    </select>
                </span>
                <span>
                    <select className= {style.btn} onChange={e => handlerOrder(e)}>
                        <option name='asc' value='asc'>A - Z</option>
                        <option name= 'desc' value='desc'>Z - A</option>
                    </select>
                </span>
                <span>
                    <select className= {style.btn} onChange={e => handlerOrder(e)}>
                        <option select value='-'>-</option>
                        <option name='ascP' value='ascP'>Ascending population</option>
                        <option name='descP' value='descP'>Descending population</option>
                    </select>
                </span>
            </div>
        </div>
    )

}