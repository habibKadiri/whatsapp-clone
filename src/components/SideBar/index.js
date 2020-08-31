import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {Avatar, IconButton} from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import DoubleArrowRoundedIcon from '@material-ui/icons/DoubleArrowRounded';
import SideBarChat from "../SideBarChat";
import db from "../../firebase";
import {useStateValue} from "../../HOCs/StateProvider";
import SideDropdown from "./SideDropdown";

const Container = styled.div`
  flex: 0.35;
  display: flex;
  height: ${({mobile}) => mobile ? "inherit" : "auto"};
  max-width: ${({mobile}) => mobile ? "auto" : "35%"};
  width: ${({mobile}) => mobile ? "inherit" : "auto"};
  flex-direction: column;
  background-color: #ededed;
  position: ${({mobile}) => mobile ? "absolute" : "static"};
  z-index: ${({mobile}) => mobile ? "100" : "auto"};
`

const Expand = styled.div`
  z-index: 100;
  display: flex;
  height: 40px;
  width: 20px;
  bottom: 50%;
  position: absolute;
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
`
const ButtonIcon = styled(IconButton)`
  && {
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
   :focus {
    outline: none;
   }
`

const SideBar = ({mobile}) => {

    const [hideBar, setHideBar] = useState(true)
    const [rooms, setRooms] = useState([])
    const [anchorEl, setAnchorEl] = useState(null);
    const [{user}] = useStateValue()



    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc =>
                ({
                    id: doc.id,
                    data: doc.data(),
                })))
        ))
        return () => {
            unsubscribe();
        }
    }, [])

    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleHideBar = () => {
        setHideBar(true)
    }

    if (mobile && hideBar) return (
        <Expand>
            <IconButton onClick={() => setHideBar(false)}>
                <DoubleArrowRoundedIcon/>
            </IconButton>
        </Expand>
    )
    return (
        <Container mobile={mobile}>
            <Header>
                <Avatar src={user?.photoURL || null}/>
                <HeaderRight>
                    <ButtonIcon>
                        <DonutLargeIcon/>
                    </ButtonIcon>
                    <ButtonIcon>
                        <ChatIcon/>
                    </ButtonIcon>
                    <ButtonIcon aria-controls="simple-menu"
                                aria-haspopup="true"
                                onClick={(e) => setAnchorEl(e.currentTarget)}>
                        <MoreVertIcon/>
                    </ButtonIcon>
                    <SideDropdown anchorEl={anchorEl} handleClose={handleClose}/>
                </HeaderRight>
            </Header>

            <Search>
                <SearchContainer>
                    <SearchOutlined/>
                    <Input placeholder="Search or Start new..." type="text"/>
                </SearchContainer>
            </Search>

            <Chat>
                <SideBarChat handleHideBar={handleHideBar} addNewChat/>
                {rooms.map(room => (
                    <SideBarChat handleHideBar={handleHideBar} key={room.id} id={room.id} name={room.data.name}/>
                ))}
            </Chat>
        </Container>
    )
}

export default SideBar