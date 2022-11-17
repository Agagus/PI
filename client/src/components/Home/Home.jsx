import CountryCards from "../CountryCards/CountryCards"
import React from 'react'
import { SearchBar } from "../SearchBar/SearchBar"
import { connect } from "react-redux";
import { getAllCountries } from '../../redux/actions/index';
import { Link } from "react-router-dom";


class Home extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getAllCountries();
    }

    render(){
        return (
                <div>
                    <SearchBar/>
                    <Link to = '/activities'>
                        <button>Add activity</button>
                    </Link>
                    <h5>
                    Esta es la ruta del home, aca necesito una searchBar, las CountryCards 
                    </h5>
                    { this.props.countries && this.props.countries.map(country => 
                            <CountryCards
                                flags = {country.flags}
                                name = {country.name}
                                continent = {country.continent}
                                id = {country.id}
                            />
                    )
                    }
                </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        countries:  state.countries
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllCountries: () => dispatch(getAllCountries())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)

// export const Home = () => {

//     const dispatch = useDispatch();
    
//     const countries = useEffect(() => {
//         dispatch(getAllCountries())
//     }, [])


//     return (
//         <div>
//             <SearchBar/>
//             <h5>
//             Esta es la ruta del home, aca necesito una searchBar, las CountryCards 
//             </h5>
//             { countries && countries.map(country => 
//                     <CountryCard 
//                         name = {country.name}
//                         continent = {country.continent}
//                     />
//             )
//             }
//         </div>
//     )
// }