import { React, useState } from "react";

const validate = (input) => {
    const error = {}

    if (!input.name) error.name = 'Enter a name';

    if (!input.difficulty) error.difficulty = 'Enter a difficulty'
    else if (input.difficulty < 1 || input.difficulty > 5) error.difficulty = 'Difficulty should be a number between 1 and 5'

    return error
}


export const CreateActivity = () => {

    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: ''
    });

    const [error, setError] = useState({});

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
        const activityData = {
            name: input.name,
            difficulty: input.difficulty,
            duration: input.duration,
            season: input.season,
        }
    }


    return (
        <div>
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
                <button>Submit</button>
            </forms>
        </div>
    )
}