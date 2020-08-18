import React from "react";
import styled from "styled-components";
import {Avatar, IconButton} from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SearchOutlined from "@material-ui/icons/SearchOutlined";

const Container = styled.div`
  flex: 0.35;
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
const Search = styled.div``
const Chat = styled.div``
const Input = styled.input`
  
`

const SideBar = () => {
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
                <SearchOutlined/>
                <Input placeholder="Search or Start new..." type="text"/>
            </Search>

            <Chat>
            </Chat>
        </Container>
    )
}

export default SideBar