import React from  'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './component/home/Home';
import Navbar from './component/navbar/Navbar';
import About from './component/about/About';
import Service from './component/service/Service';
import Contact from './component/contact/Contact';

const App = () => {

  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/service' component={Service} />
      <Route exact path='/contact' component={Contact} />
    </Switch>
    <Redirect to ='/' />
    </>
  )
}

export default App;