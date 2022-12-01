import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, getByContinent, getByActivity, getAlphabetical, getByPopulation } from "../../redux/actions/index";
import style from "./Order.module.css"

export const Order = ({setCurrentPage}) => {
    const dispatch = useDispatch();
    const activities = useSelector(state => state.activities); 

    useEffect(() => {
        dispatch(getActivities());
    }, [dispatch])
    

        
    const handlerActivities = (e) => {
        e.preventDefault();
        dispatch(getByActivity(e.target.value))
        setCurrentPage(1)
    }
    
    
    
    const handlerContinent = (e) => {
        e.preventDefault();
        dispatch(getByContinent(e.target.value))
        setCurrentPage(1)
    }


    const handlerOrderA = (e) => {
        e.preventDefault();
        dispatch(getAlphabetical(e.target.value))
        setCurrentPage(1)
        

    }

    const handlerOrderPop = (e) => {
        e.preventDefault();
        dispatch(getByPopulation(e.target.value))
        setCurrentPage(1)
    }


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
                    <select className={style.btn} onChange={e => handlerActivities(e)}>
                        <option value='All'>All</option>
                        { activities && activities.map(a => {
                            return(<option value={a.name}>{a.name}</option>)
                        })}
                    </select>
                </span>
                <span>
                    <select className= {style.btn} onChange={e => handlerOrderA(e)}>
                        <option name='random' value='random'>-</option>
                        <option name='asc' value='asc'>A - Z</option>
                        <option name= 'desc' value='desc'>Z - A</option>
                    </select>
                </span>
                <span>
                    <select className= {style.btn} onChange={e => handlerOrderPop(e)}>
                        <option select value='-'>-</option>
                        <option name='ascP' value='ascP'>Ascending population</option>
                        <option name='descP' value='descP'>Descending population</option>
                    </select>
                </span>
            </div>
        </div>
    )

}