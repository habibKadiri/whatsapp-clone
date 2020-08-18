import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Avatar, IconButton} from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import SideBarChat from "../SideBarChat";
import db from "../../firebase";

const Container = styled.div`
  flex: 0.35;
  display: flex;
  flex-direction: column;
`
const Header = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 20px;
   border-right: 1px solid lightgray;
`
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 10vw;
  svg {
    margin-right: 2vw;
    font-size: 24px !important;
  }
`
const Search = styled.div`
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  height: 39px;
  padding: 10px;
`
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: 100%;
  border-radius: 20px;
  svg {
    color: gray;
    padding: 3px;
  }
`
const Chat = styled.div`
  flex: 1;
  background-color: white;
  overflow: auto;
`
const Input = styled.input`
   border: none;
   margin-left: 10px;
`

const SideBar = () => {

    const [rooms, setRooms] = useState([])

    useEffect(() => {
        db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc =>
                ({
                    id: doc.id,
                    data: doc.data(),
                })))
        ))
    }, [])

    return (
        <Container>
            <Header>
                <Avatar/>
                <HeaderRight>
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </HeaderRight>
            </Header>

            <Search>
                <SearchContainer>
                    <SearchOutlined/>
                    <Input placeholder="Search or Start new..." type="text"/>
                </SearchContainer>
            </Search>

            <Chat>
                <SideBarChat addNewChat={true}/>
                {rooms.map(room => (
                    <SideBarChat key={room.id} id={room.id} name={room.data.name}/>
                ))}
            </Chat>
        </Container>
    )
}

export default SideBar