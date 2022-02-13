import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutUs from './components/pages/AboutUs';
import ConnectWallet from './components/pages/ConnectWallet';
import Mint from './components/pages/Mint';
import './styles/App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/mint' component={Mint} />
          <Route path='/wallet' component={ConnectWallet} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
