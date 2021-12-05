import React from 'react';
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Main from './components/AdminDashborad/Main/Main';
import About from './components/pages/About/About';
import Blog from './components/pages/Blog/Blog';
import Contact from './components/pages/Contact/Contact';
import Home from './components/pages/Home/Home';
import Mobile from './components/pages/Mobile/Mobile';
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
          <Route  path="/web">
              <Project ></Project>
          </Route>
          <Route path="/mobile">
            <Mobile></Mobile>
          </Route>
          <Route path="/adminboard">
            <Main/>
          </Route>
          <Route exact path="/">
            <Home ></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
