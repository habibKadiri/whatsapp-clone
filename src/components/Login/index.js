import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import {auth, FacebookProvider, GoogleProvider} from "../../firebase";
import {useStateValue} from "../../HOCs/StateProvider";
import {setUser} from "../../store/actions/loginActions";

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
    background-color: ${({active}) => (active ? "#3b5998 !important": "#0a8d48 !important")};
    color: ${({active}) => (active ? "#000000" : "#ffffff")};
  }
`
const Text = styled.div``

const Login = () => {
    // eslint-disable-next-line no-empty-pattern
    const [{}, dispatch] = useStateValue()
    const signInGoogle = () => {
        auth.signInWithPopup(GoogleProvider).then(result => (
            dispatch(setUser(result.user))
        )).catch(error => alert(error.message))
    };

    const signInFacebook = () => {
        auth.signInWithPopup(FacebookProvider).then(result => (
            dispatch(setUser(result.user))
        )).catch(error => alert(error.message))
    }


    return (
        <Container>
            <Content>
                <img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"/>
                <Text>
                    <h1>Sign in to WhatsApp</h1>
                </Text>
                <Button type="submit" onClick={signInGoogle}>
                    Sign In With Google
                </Button>
                <Button type="submit" active={true} onClick={signInFacebook}>
                    Sign In With Facebook
                </Button>
            </Content>
        </Container>
    )
}

export default Login