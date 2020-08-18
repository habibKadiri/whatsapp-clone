import React, {useState} from 'react';
import styled from "styled-components";
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/Login";
import {useStateValue} from "./HOCs/StateProvider";

const Container = styled.div`
  background-color: #dadbd3;
  height: 100vh;
  display: grid;
  place-items: center;
`

const Body = styled.div`
  display: flex;
  width: 90vw;
  height: 90vh;
  background-color: #ededed;
  box-shadow: -1px 4px 20px -6px rgba(0,0,0,0.7);
`

const App = () => {
    const [{user}, dispatch] = useStateValue()

    return (
        <Container>
            {!user ? (
                <Login/>
            ) : (
                <Body>
                    <Router>
                        <SideBar/>
                        <Switch>
                            <Route path="/rooms/:roomId" component={Chat}/>
                        </Switch>
                    </Router>
                </Body>
            )}
        </Container>
    );
}

export default App;
