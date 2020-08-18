import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Avatar, IconButton} from "@material-ui/core";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVert from "@material-ui/icons/MoreVert";
import MicIcon from "@material-ui/icons/Mic";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";


const Container = styled.div`
  flex: 0.65;
  display: flex;
  flex-direction: column;
`
const Header = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
`

const ChatHeaderInfo = styled.div`
  flex: 1;
  padding-left: 20px;
  h3 {
    margin-bottom: 3px;
    font-weight: 500;
  }
`
const ChatHeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 100px;
`

const Body = styled.div`
  flex: 1;
  background-repeat: repeat;
  background-position: center;
  padding: 30px;
  overflow: auto;
  background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
`

const ChatMsg = styled.p`
  position: relative;
  font-size: 16px;
  padding: 10px;
  border-radius: 10px;
  width: fit-content;
  margin-bottom: 30px;
  margin-left: ${(props) => (props.active ? "auto" : "0")};
  background-color: ${(props) => (props.active ? "#dcf8c6" : "white")};
`

const Name = styled.span`
  position: absolute;
  top: -15px;
  font-weight: 800;
  font-size: xx-small;
`
const TimeStamp = styled.span`
  margin-left: 10px;
  font-size: xx-small;
`

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  border-top: 1px solid lightgray;
  svg {
    padding: 2px;
    color: gray;
  }
  form {
     flex: 1;
     display: flex;
     input {
      flex: 1;
      border-radius: 30px;
      padding: 10px;
      border: none;       
     }
  }
`


const Chat = () => {
    const [seed, setSeed] = useState('')
    const [input, setInput] = useState("")

    useEffect(() => {
        setSeed(`${Math.floor(Math.random() * 5000)}`)
    }, [])

    const handleInput = (e) => {
        const value = e.currentTarget.value
        setInput(value)
    }

    const sendMessage = (e) => {
        e.preventDefault()
        console.log(input);
        setInput('')
    }

    return (
        <Container>
            <Header>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <ChatHeaderInfo>
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </ChatHeaderInfo>
                <ChatHeaderRight>
                    <IconButton><SearchOutlined/></IconButton>
                    <IconButton><AttachFile/></IconButton>
                    <IconButton><MoreVert/></IconButton>
                </ChatHeaderRight>
            </Header>
            <Body>
                <ChatMsg>
                    <Name>Habib Kadiri</Name>
                    Hey guys
                    <TimeStamp>3:52pm</TimeStamp>
                </ChatMsg>
            </Body>

            <Footer>
                <InsertEmoticonIcon/>
                <form onSubmit={sendMessage}>
                    <input value={input} onChange={handleInput} placeholder="Type a message" type="text"/>
                </form>
                <MicIcon/>
            </Footer>

        </Container>
    )
}


export default Chat