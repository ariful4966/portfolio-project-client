import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Footer from './components/Footer/Footer';
import About from './components/pages/About/About';
import Blog from './components/pages/Blog/Blog';
import Contact from './components/pages/Contact/Contact';
import Home from './components/pages/Home/Home';
import NotFound from './components/pages/NotFound/NotFound';
import Project from './components/pages/Project/Project';






function App() {

  return (

      
      <Router>
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
  );
}

export default App;
