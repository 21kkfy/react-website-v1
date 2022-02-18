import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RoadMap from './components/pages/RoadMap';
import Mint from './components/pages/Mint';
import './styles/App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/road-map' component={RoadMap} />
          <Route path='/mint' component={Mint} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
