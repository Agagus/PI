import axios from "axios";
import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { postActivity } from "../../redux/actions/index";

const validate = (input) => {
    const error = {}

    if(!input.name) error.name = 'Enter a name';
    if(!input.difficulty) error.difficulty = 'Enter a difficulty'
    else if(input.difficulty < 1 || input.difficulty > 5) error.difficulty = 'Difficulty should be a number between 1 and 5'
    if(!input.country) error.country = 'Enter a country'

    return error
}


export const CreateActivity = () => {

    const dispatch= useDispatch();

    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        country: ''
    });

    const [error, setError] = useState({});

    useEffect(() => { //cada vez que se genera un cambio en el input, setear el error con las validaciones
        setError(validate(input))
    }, [input])

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
        // const activityData = {
        //     name: input.name,
        //     difficulty: input.difficulty,
        //     duration: input.duration,
        //     season: input.season,
        //     country: input.country,
        // }
        console.log(input)

        dispatch(postActivity(input));

        // setInput({
        //     name: '',
        //     difficulty: '',
        //     duration: '',
        //     season: '',
        //     country: ''})

        //traerme la fcion que hace axios.post
    }


    return (
        <div>
            <Link to='/countries'>
                <button>BACK</button>
            </Link>
            <hr></hr>
            <forms onSubmit={handlerSubmit}>
                <label>* Name:</label>
                <input
                    name='name'
                    type='text'
                    onChange={handlerInput}
                    value={input.name}></input>
                {error.name && <p>{error.name}</p>}
                <hr></hr>
                <label>* Difficulty:</label>
                <input
                    name='difficulty'
                    type='number'
                    onChange={handlerInput}
                    value={input.difficulty} />
                {error.difficulty && <p>{error.difficulty}</p>}
                <hr></hr>
                <label>Duration:</label>
                <input
                    name='duration'
                    type='number'
                    onChange={handlerInput}
                    value={input.duration} />
                <hr></hr>
                <label>Season:</label>
                <select>
                    <option>Summer</option>
                    <option>Autumn</option>
                    <option>Winter</option>
                    <option>Spring</option>
                    <option>All year</option>
                </select>
                <hr></hr>
                <label>* Country:</label>
                <input
                    name='country'
                    type='text'
                    onChange={handlerInput}
                    value={input.country}></input>
                    {error.country && <p>{error.country}</p>}
                <button>Submit</button>
            </forms>
        </div>
    )
}