import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {AppBar, Tab, Tabs} from '@material-ui/core';
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  const routes = ["/Home", "/About", "/Projects"];
  
  return (
    <BrowserRouter>
      <Route path="/" render={(history) => (
        <AppBar>
        <Tabs centered value={history.location.pathname !== "/" ? history.location.pathname : false}>
          <Tab label="Home" value={routes[0]} component={Link} to={routes[0]}/>
          <Tab label="About" value={routes[1]} component={Link} to={routes[1]} />
          <Tab label="Projects" value={routes[2]} component={Link} to={routes[2]}/>
        </Tabs>
      </AppBar>
      )}/>

      <Switch>
        <Route path="/Home" component={Home}/>
        <Route path="/About" component={About}/>
        <Route path="/Projects" component={Projects}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
