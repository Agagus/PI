import axios from "axios";
import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { postActivity, getAllCountries } from "../../redux/actions/index";
import style from "./CreateActivity.module.css"

const validate = (input) => {
    const error = {}

    if(!input.name) error.name = 'Enter a name';
    if(!input.difficulty) error.difficulty = 'Enter a difficulty'
    else if(input.difficulty < 1 || input.difficulty > 5) error.difficulty = 'Difficulty should be a number between 1 and 5'
    if(!input.duration) error.duration = 'Enter duration'
    if(!input.season) input.season = 'All year'
    if(!input.country) error.country = 'Enter a country'

    return error
}


export const CreateActivity = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state)=> state.countries);
    const history= useHistory();
    const [input, setInput] = useState({});
    const [error, setError] = useState({});

    // useEffect(() => { //cada vez que se genera un cambio en el input, setear el error con las validaciones
    //     setError(validate(input))
    // }, [input])

    useEffect(()=>{
        if(!countries.length)
            dispatch(getAllCountries());
    });

    const handlerInput = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })

        setError(validate({
            ...input,
            [event.target.name]: event.target.value
        }))
    }

    
    const handlerSubmit = (e) => {
        e.preventDefault();
        
        console.log(input)
        // if(!Object.keys(error).length) //chequear
            axios.post('http://localhost:3001/activities', input)
            .then(() => {
                history.push('/countries')
            })

    }


    return (
        <div className={style.container}>
            <div className={style.nav}>
                <Link to='/countries'>
                    <button className={style.button}>BACK</button>
                </Link>
            </div>
            <div className={style.cont}>
                <form className={style.form} onSubmit={handlerSubmit}>
                    <div className={style.camp}>
                        <label>Name: *</label>
                        <input
                            className={style.input}
                            name='name'
                            type='text'
                            onChange={handlerInput}
                            value={input.name}></input>
                    </div>
                        {error.name && <p>{error.name}</p>}
                    <div className={style.camp}>
                        <label>Difficulty: *</label>
                        <input
                            className={style.input}
                            name='difficulty'
                            type='number'
                            onChange={handlerInput}
                            value={input.difficulty} />
                    </div>
                        {error.difficulty && <p>{error.difficulty}</p>}
                    <div className={style.camp}>
                        <label>Duration: *</label>
                        <input
                            className={style.input}
                            name='duration'
                            type='number'
                            onChange={handlerInput}
                            value={input.duration} />
                    </div>
                        {error.duration && <p>{error.duration}</p>}
                    <div className={style.camp}>
                        <label>Season:</label>
                        <select
                            className={style.option}
                            name='season'
                            onChange={handlerInput}
                            value={input.season}>
                            <option>Summer</option>
                            <option>Autumn</option>
                            <option>Winter</option>
                            <option>Spring</option>
                            <option select>All year</option>
                        </select>
                    </div>
                    <div className={style.camp}>
                        <label>Country: *</label>
                        <select className={style.option} onChange={handlerInput} name="id">
                            {
                                countries && countries.map((country)=>{
                                    return (<option value={country.id}>{country.name}</option>)
                                })
                            }
                        </select>
                    </div>
                    {/* {error.country && <p>{error.country}</p>} */}
                    <button className={style.button} type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}