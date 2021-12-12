import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { PrivateRoute } from "./components/pages/Authentication/PrivateRoute";
import Main from "./components/AdminDashborad/Main/Main";
import About from "./components/pages/About/About";
import Authentication from "./components/pages/Authentication/Authentication";
import Blog from "./components/pages/Blog/Blog";
import Contact from "./components/pages/Contact/Contact";
import Home from "./components/pages/Home/Home";
import Mobile from "./components/pages/Mobile/Mobile";
import NotFound from "./components/pages/NotFound/NotFound";
import Project from "./components/pages/Project/Project";
import Cookies from "universal-cookie";
import decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { getCookieUser } from "./redux/actions";

const cookies = new Cookies();

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const token = cookies.get("ariful");

  useEffect(() => {
    if (token) {
      const userToken = decode(token);
      dispatch(getCookieUser(userToken));
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (token) {
      const {iat, exp} = decode(token);
      if(parseInt(new Date()/1000) > exp){
        cookies.remove('ariful')
      }
    }
  }, [token]);

  return (
    <Router>
      <Switch>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/blog">
          <Blog></Blog>
        </Route>
        <Route path="/web">
          <Project></Project>
        </Route>
        <Route path="/mobile">
          <Mobile></Mobile>
        </Route>
        <PrivateRoute path="/adminboard">
          <Main />
        </PrivateRoute>
        <Route path="/login">
          <Authentication />
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
