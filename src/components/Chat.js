import React from 'react'
import styled from 'styled-components'
import InfoIcon from '@material-ui/icons/Info';

function Chat() {
  return (
    <Container>
      <Header>
        <ChannelDetails>
          <h4># Channel Name</h4>
          <p> Channel Description</p>
        </ChannelDetails>
        <DetailsContainer>
          Details
          <InfoIcon/>
        </DetailsContainer>
      </Header>
      <ChatWindow>
        Chat Window
      </ChatWindow>
    </Container>
  )
}

export default Chat

const Container = styled.main`
  background: blue;
  display: grid;
  grid-template-rows: 64px auto;
`

const Header = styled.header`
  background: red;
  display: flex;
  justify-content: space-between;
`

const ChannelDetails = styled.div`
  background: purple;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px
`

const DetailsContainer = styled.div`
  display: flex;
  align-items: top;
  padding-top: 10px;
  padding-right: 16px;
`
const ChatWindow = styled.section`
  background: green;
`