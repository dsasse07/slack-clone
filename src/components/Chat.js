import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

function Chat() {
  return (
    <Container>
      <Header>
        <Channel>
          <ChannelName>
            # Channel Name
          </ChannelName>
          <ChannelInfo>
            Company wide announcements and work-based matters
          </ChannelInfo>
        </Channel>
        <ChannelDetails>
          <div>
            Details
          </div>
          <Info/>
        </ChannelDetails>
      </Header>
      <MessageContainer>
        <ChatMessage />
      </MessageContainer>
      <ChatInput />
    </Container>
  )
}

export default Chat

const Container = styled.main`
  display: grid;
  grid-template-rows: 64px auto min-content;
  
`

const Header = styled.header`
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  align-items: center;
  border-bottom: 1px solid rgba(83,39,83, 0.13);
  justify-content: space-between;
`

const Channel = styled.div`

`
const ChannelName = styled.div`
  font-weight: 700;
`
const ChannelInfo = styled.div`
  font-weight: 400;
  color: #606060;
  font-weight: 13px;
  margin-top: 8px;
`
const Info = styled(InfoOutlinedIcon)`
  margin-left: 10px;
`

const ChannelDetails = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-right: 16px;
  color: #606060;
`
const MessageContainer = styled.section`

`
