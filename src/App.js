import React, {useState} from 'react';
import styled from "styled-components";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/Login";
import {useStateValue} from "./HOCs/StateProvider";
import {auth} from "./firebase";
import ChatRoom from "./components/ChatRoom";
import PrivateRoute from "./HOCs/PrivateRoute";

const Container = styled.div`
  background-color: #dadbd3;
  height: 100vh;
  display: grid;
  place-items: center;
`


const App = () => {
    const [{user}, dispatch] = useStateValue()
    console.log("auth:  ", auth)

    return (
        <Container>
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <PrivateRoute path="/rooms" component={ChatRoom}/>
                </Switch>
            </Router>
        </Container>
    );
}

export default App;
