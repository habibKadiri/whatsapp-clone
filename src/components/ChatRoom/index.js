import {Route} from "react-router";
import React, {useEffect, useState} from "react";
import SideBar from "../SideBar";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import Chat from "../Chat";
import styled from "styled-components";
import {useResponsive} from "../../customHooks";

const Body = styled.div`
  display: flex;
  width: 90vw;
  height: 90vh;
  background-color: #ededed;
  box-shadow: -1px 4px 20px -6px rgba(0,0,0,0.7);
`

const ChatRoom = () => {
    const [isHigher] = useResponsive(768)

    return (
        <Body>
            <Router>
                <SideBar mobile={!isHigher}/>
                <Switch>
                    <Route path="/rooms/:roomId" render={(props) => <Chat {...props} mobile={!isHigher}/>}/>
                </Switch>
            </Router>
        </Body>
    )
}
export default ChatRoom