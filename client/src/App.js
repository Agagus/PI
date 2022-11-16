import './App.css';
import { Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage/LandingPage';
import Home from './components/Home/Home.jsx';
import CountryDetail from './components/CountryDetail/CountryDetail';
// En este archivo hacer las routes

function App() {
  return (
    <div className="App">
      <h1>
        <Route exact path = '/' component = {LandingPage} />
        <Route exact path = '/countries' render = {() => <Home/>} />
        <Route path = '/countries' render = {() => <CountryDetail/>} />
        <Route exact path = '/countries/:id' render = {
          ({match}) => <CountryDetail match={match} id={match.params.id}/>} />
      </h1>
    </div>
  );
}

export default App;
