import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Project from './components/Project/Project';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

import './App.css';




function App() {

  return (

    <div className="App">
      

      {/* for routing */}
      <Router>
        <Header></Header>
        <Switch>
          <Route  path="/contact">
            <Contact></Contact>
          </Route>
          <Route  path="/about">
            <About></About>
          </Route>
          <Route  path="/blog">
            <Blog></Blog>
          </Route>
          <Route  path="/project">
              <Project ></Project>
          </Route>
          <Route exact path="/">
            <Home ></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer ></Footer>
      </Router>
    </div>
  );
}

export default App;
