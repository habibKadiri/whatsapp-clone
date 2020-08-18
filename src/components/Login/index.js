import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const Container = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
`

const Content = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0 ,0,0,0.12), 0 1px;
  img {
    object-fit: contain;
    height: 100px;
    margin-bottom: 40px;
  }
  button {
    margin-top: 50px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`
const Text = styled.div`
  
`

const Login = () => {
    const signIn = () => {

    }

    return (
        <Container>
            <Content>
                <img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"/>
                <Text>
                    <h1>Sign in to WhatsApp</h1>
                </Text>
                <Button type="submit" onClick={signIn}>
                    Sign In With Google
                </Button>
            </Content>
        </Container>
    )
}

export default Login