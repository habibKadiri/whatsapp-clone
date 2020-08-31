import {Route} from "react-router";
import React, {useEffect, useState} from "react";
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
    const [mQuery, setMQuery] = useState({
        matches: window.innerWidth > 768,
    })

    useEffect(() => {
        window.matchMedia("(min-width: 768px)").addEventListener("change", setMQuery)
        return () => window.matchMedia("(min-width: 768px)").removeEventListener("change", setMQuery)
    }, [])

    return (
        <Body>
            <Router>
                {mQuery && !mQuery.matches ? null : <SideBar/>}
                <Switch>
                    <Route path="/rooms/:roomId" render={(props) => <Chat {...props} mobile={!mQuery.matches}/>}/>
                </Switch>
            </Router>
        </Body>
    )
}
export default ChatRoom