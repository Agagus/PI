import CountryCards from "../CountryCards/CountryCards"
import { Pagination } from "../Pagination/Pagination"
import React, { useEffect, useState } from 'react'
import { SearchBar } from "../SearchBar/SearchBar"
import { connect, useDispatch, useSelector } from "react-redux";
import { getAllCountries } from '../../redux/actions/index';
import { Link } from "react-router-dom";
import style from "./Home.module.css"
import { Order } from "../OrderButtons/Order";

export const Home = () => {

    const countries = useSelector((state) => state.countries);
    // const filterCountries = useSelector((state) => state.filterCountries)
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const indexLast = (currentPage * countriesPerPage) - 1; //
    const indexFirst = indexLast - countriesPerPage; 
    const currentCountries = currentPage === 1 ? countries.slice(0, 9) : countries.slice(indexFirst, indexLast)


    const paginated = (page) => {
        setCurrentPage(page)
    }

    useEffect(()=> {
        dispatch(getAllCountries())
    }, [dispatch]);

        return (
                <div>
                    <p className={style.nav}>
                        <p className={style.p1}>
                            <SearchBar className={style.sear} />
                            <Link to = '/activities'>
                                <button className={style.act}>Add activity</button>
                            </Link> 
                        </p>
                            <Order setCurrentPage={setCurrentPage}/>
                        <p className={style.p}>
                            <Pagination 
                                countries={countries.length}
                                countriesPerPage={countriesPerPage}
                                paginated={paginated}
                            />
                        
                        </p>
                    </p>
                    

                    <div className={style.cards}>
                    { currentCountries.length && currentCountries.map(country => 
                            <CountryCards
                                flags = {country.flags}
                                name = {country.name}
                                continent = {country.continent}
                                id = {country.id}
                            />
                    )
                    }
                    </div>
                </div>
            )
}
