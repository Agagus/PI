import { React, useState } from "react";

export const CreateActivity = () => {

    const [ input, setInput ] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: ''
    })

    const handlerInput = (event) => {
        setInput({
            ...input,
            [event.target.name] : event.target.value
        })
    }


    return (
        <div>
            <forms>
                <label>* Name:</label>
                <input
                    name = 'name'
                    type='text'
                    onChange={handlerInput}
                    value = {input.name} />
                <hr></hr>
                <label>* Difficulty:</label>
                <input
                    name = 'difficulty'
                    type='number'
                    onChange={handlerInput}
                    value = {input.difficulty} />
                <hr></hr>
                <label>Duration:</label>
                <input
                    name = 'duration'
                    type='number'
                    onChange={handlerInput}
                    value = {input.duration} />
                <hr></hr>
                <label>Season:</label>
                <select>
                    <option>Summer</option>
                    <option>Autumn</option>
                    <option>Winter</option>
                    <option>Spring</option>
                    <option>All year</option>
                </select>
            
            </forms>
        </div>
    )
}