import React from 'react'
import styled from 'styled-components'

function ChatMessage() {
  return (
    <Container>
      <UserAvatar>
        <img src="https://randomuser.me/api/portraits/men/59.jpg" />
      </UserAvatar>
      <MessageContent>
        <Name>
          Danny
          <span>February 24, 2021</span>
        </Name>
        <Text>
          Im so tired!
        </Text>
      </MessageContent>
    </Container>
  )
}

export default ChatMessage

const Container = styled.div`
  padding: 8px 20px;
  display: flex;
  align-items: center;
`

const UserAvatar = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 3px;
  overflow: hidden;
  margin-right: 8px;

  img{
    width: 100%;
  }
`

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.span`
  font-weight: 900;
  font-size: 15px;
  line-height: 1.4;
  
  span{
    margin-left: 8px;
    font-weight: 400;
    color: rgb(97,97,97);
    font-size: 13px;
  }
`

const Text = styled.span`

`