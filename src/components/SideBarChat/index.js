import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Avatar} from "@material-ui/core";
import db from "../../firebase";
import {Link} from "react-router-dom";

const Container = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid #f6f6f6;
  
  :hover{
    background-color: #ebebeb;
  }
`

const Info = styled.div`
  margin-left: 15px;
  h2 {
    font-size: 16px;
    margin-bottom: 8px;
  }
  p { }
`

const SideBarChat = ({addNewChat, id, name}) => {

    const [seed, setSeed] = useState('')
    const [messages, setMessages] = useState('')


    useEffect(() => {
        setSeed(`${Math.floor(Math.random() * 5000)}`)
    }, [])

    useEffect(() => {
        if (id) {
            db.collection('rooms').doc(id).collection('messages')
                .orderBy('created', 'desc').onSnapshot(snapshot => (
                setMessages(snapshot.docs.map((doc) => (
                    doc.data()
                )))))
        }
    }, [id])

    const createChat = () => {
        const roomName = prompt("please enter name for the chat room")
        if (roomName) {
            db.collection('rooms').add({
                name: roomName
            })
        }
    }

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <Container>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <Info>
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </Info>
            </Container>
        </Link>
    ) : (
        <Container onClick={createChat}>
            <h2>Add new Chat</h2>
        </Container>
    );
}

export default SideBarChat