import './App.css';
import React from 'react'
import { Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage/LandingPage';
import { Home } from './components/Home/Home.jsx';
import { CountryDetail } from './components/CountryDetail/CountryDetail.jsx';
import { CreateActivity } from './components/CreateActivity/CreateActivity';
import style from './App.module.css'
// import CountryCard from './components/CountryCard/CountryCard.jsx';
// En este archivo hacer las routes

function App() {
  return (
    <div className="App">
      <h1 className={style.app}>
        <div className={style.landing}>
          <Route exact path = '/' component = {LandingPage} />
        </div>
        <Route exact path = '/countries' render = {() => <Home/>} />
        <Route exact path = '/countries/:id' render = {()=><CountryDetail />} />
        <Route exact path = '/activities' render = {() => <CreateActivity />} />
      </h1>
    </div>
  );
}

export default App;
