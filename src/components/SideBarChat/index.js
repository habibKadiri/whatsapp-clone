import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Avatar} from "@material-ui/core";

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
  h2 {
  
  }
  
  p {
    
  }
`
const SideBarChat = () => {

    const [seed, setSeed] = useState('')

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    return (
        <Container>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <Info>
                <h2>Room name</h2>
                <p>Last message...</p>
            </Info>
        </Container>
    )
}

export default SideBarChat