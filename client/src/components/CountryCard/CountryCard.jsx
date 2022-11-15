import React from 'react';
import { connect } from 'react-redux';
import { getAllCountries } from '../../redux/actions/index';


const CountryCard = (props) => {
    
    componentDidMount() {
        props.getAllCountries()
    }
    // componentDidMount(){
    //     props.getAllCountries()
    // }


    return (
        <div>
            <img alt='Country Flag'/>
            <h4>{props.name}</h4>
            <h6>{props.continent}</h6>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllCountries : () => dispatch(getAllCountries())
    }
}


export default connect((mapStateToProps, mapDispatchToProps), CountryCard)