import React from "react";
import { Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "semantic-ui-css/semantic.min.css";
import './App.css';

import { AuthProvider } from "./context/auth";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Container>
           <Navbar/>
           <Switch>
             <Route exact path="/" component={Home} />
             <Route exact path="/login" component={Login} />
             <Route exact path="/register" component={Register} />
           </Switch>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
