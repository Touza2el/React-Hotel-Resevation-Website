import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import Home from './pages/home/Home';
import Rooms from './pages/rooms/Rooms';
import SingleRoom from './pages/single-room/SingleRoom';
import Error from './pages/error/Error';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms/' component={Rooms} />
        <Route exact path='/rooms/:slug' component={SingleRoom} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
