import { useState } from "react"
import { useDispatch } from "react-redux";
import { getAllCountries } from "../../redux/actions/index";
import style from './SearchBar.module.css';


export const SearchBar = () => {

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        name: ''
    });

    const handlerChange = (event) => {
        setInput(input => ({
            ...input,
            [event.target.name]: event.target.value
            }))
    };


    const handlerSubmit = (event) => {
        event.preventDefault();
        dispatch(getAllCountries(input.name))
        
        setInput({name: ''})
    }


    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <input
                    className={style.input}
                    type= 'text'
                    name='name'
                    value={input.name}
                    onChange= {handlerChange}></input>
                <button className={style.button}>Search</button>

            </form>
        </div>
    )
} 