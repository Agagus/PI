import { SearchBar } from "../SearchBar/SearchBar"

export const Home = (props) => {
    return (
        <div>
            <SearchBar/>
            <h5>
            Esta es la ruta del home, aca necesito una searchBar, las CountryCards 
            </h5>
            { props.countries.map()
    // mapear lo que me va a llegar por props e ir creando una card por cada elem
            }
        </div>
    )
}