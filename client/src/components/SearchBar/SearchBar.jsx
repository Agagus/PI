import { useState } from "react"
import { useDispatch } from "react-redux";

export const SearchBar = () => {
    const dispatch = useDispatch();

    const [input, setInput] = useState({
        name: ''
    });

    const handlerChange = () => {};

    const handlerSubmit = () => {};

    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <input
                    type= 'text'
                    name='name'
                    value={input.value}
                    onChange= {handlerChange}></input>
                <button>Search</button>

            </form>
        </div>
    )
} 