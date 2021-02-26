import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'
import logo from '../assets/images/logo.png'

function Login({ onLogin }) {

  const signIn = () => {
    auth.signInWithPopup(provider)
      .then(response => {
        const newUser = {
          name: response.user.displayName,
          photo: response.user.photoURL,
          id: response.user.uid
        }
        onLogin(newUser)
      })
      .catch(error => {
        alert(error.message)
      })
  }


  return (
    <Container>
      <Content>
        <SlackImg src={logo}/>
        <h1> Sign in to Slack </h1>
        <SignInButton onClick={signIn}>
            Sign In 
            <ServiceIcon>
              <img 
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpluspng.com%2Fimg-png%2Fgoogle-photos-logo-png-google-400.png&f=1&nofb=1"
                alt="Google Sign On"
              />
            </ServiceIcon>
        </SignInButton>
      </Content>
    </Container>
  )
}

export default Login


const Container = styled.main`
  align-items: center;
  background: #f8f8f8;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`

const Content = styled.section`
  align-items: center;
  background: white;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px;

  h1{
    margin-top: 20px;
  }
  
` 

const SlackImg = styled.img`
  height: 100px;
`
const SignInButton = styled.button`
  align-items: center;
  background-color: #85db98;
  border: none;
  border-radius: 4px;
  color: #2d2d2d;
  display: flex;
  height: 30px;
  margin-top: 50px;
  padding-bottom: 4px;
  cursor: pointer;
  font-size: 15px;
  width: 140px;
  justify-content: center;
  font-weight: 600;

  :hover {
    background: white;
    border: 2px solid #85db98;
  }
`

const ServiceIcon = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;

  img{
    height: 23px;
    width: 23px;
    outline: 2px;
    padding-top: 2px;
    padding-left: 5px;
  }
`