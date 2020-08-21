import {Route} from "react-router";
import React from "react";
import SideBar from "../SideBar";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import Chat from "../Chat";
import styled from "styled-components";

const Body = styled.div`
  display: flex;
  width: 90vw;
  height: 90vh;
  background-color: #ededed;
  box-shadow: -1px 4px 20px -6px rgba(0,0,0,0.7);
`

const ChatRoom = () => {

    return (
        <Body>
            <Router>
                <SideBar/>
                <Switch>
                    <Route path="/rooms/:roomId" component={Chat}/>
                </Switch>
            </Router>
        </Body>
    )
}
export default ChatRoom