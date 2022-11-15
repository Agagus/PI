import './App.css';
import { Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage/LandingPage';
import { Home } from './components/Home/Home';
// En este archivo hacer las routes

function App() {
  return (
    <div className="App">
      <h1>
        <Route exact path = '/' component = {LandingPage} />
        <Route exact path = '/countries' render = {() => <Home/>} />
      </h1>
    </div>
  );
}

export default App;
