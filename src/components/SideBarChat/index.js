import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Avatar} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import CreateNewChat from "../SideBar/CreatNewChat";
import {useLatestMessage} from "../../customHooks";

const Container = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid #f6f6f6;
  :hover{
    background-color: #ebebeb;
  }
`

const activeClassName = "nav-item-active";

const RoomLink = styled(NavLink).attrs({activeClassName})`
  &.${activeClassName}{
    div {    
      background-color: #ebebeb;
    }
  }
`

const Info = styled.div`
  margin-left: 15px;
  min-width: 0;
  h2 {
    font-size: 16px;
    margin-bottom: 8px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    
  }
  p {
   text-overflow: ellipsis;
   overflow: hidden;
   white-space: nowrap;
  }
`

const SideBarChat = ({addNewChat, id, name}) => {

    const [seed, setSeed] = useState('')
    const message = useLatestMessage(id)


    useEffect(() => {
        setSeed(`${Math.floor(Math.random() * 5000)}`)
    }, [])

    return !addNewChat ? (
        <RoomLink to={`/rooms/${id}`}>
            <Container>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <Info>
                    <h2>{name}</h2>
                    <p>{message?.message}</p>
                </Info>
            </Container>
        </RoomLink>
    ) : (
        <CreateNewChat/>
    );
}

export default SideBarChat