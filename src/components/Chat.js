import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'
import db from '../firebase';
import { useParams } from 'react-router-dom'
import firebase from 'firebase'

function Chat( {user} ) {
  
  let { id } = useParams()
  const [channel, setChannel] = useState()
  const [messages, setMessages] = useState([])
  // const messagesEndRef = useRef(null)

  useEffect( () => {
    getChannel()
    getMessages()
    // scrollToBottom()
  }, [id, messages])

  // function scrollToBottom () {
  //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  // }

  function getChannel(){
    db.collection("channels").doc(id).onSnapshot(snapshot => {
      setChannel( snapshot.data() )
    })
  }

  function getMessages(){
    db.collection("channels")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp","asc" )
      .onSnapshot( snapshot => {
        let messageData = snapshot.docs.map( doc => doc.data() )
        setMessages( messageData )
      })
  }

  const messageComponents = messages.map( data => {
      return (
        <ChatMessage
          key={data.userId}
          user={data.user}
          userId={data.userId}
          userImage={data.userImage}
          timestamp={data.timestamp.seconds} 
          text={data.text}
        />
      )
  })

  function sendMessage(text){
    if(id){
      const messageConfig = {
        text: text,
        user: user.name,
        userImage: user.photo,
        userId: user.id,
        timestamp: firebase.firestore.Timestamp.now()
      }
      db.collection("channels").doc(id)
        .collection('messages').add(messageConfig)
    }
  }


  return (
    <Container>
      <Header>
        <Channel>
          <ChannelName>
            {channel && channel?.name}
          </ChannelName>
          <ChannelInfo>
            {channel && channel?.description}
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
        {messageComponents.length > 0 && messageComponents}
        {/* <div ref={messagesEndRef} /> */}
      </MessageContainer>
      <ChatInput onSendMessage={sendMessage}/>
    </Container>
  )
}

export default Chat

const Container = styled.main`
  display: grid;
  grid-template-rows: 64px auto min-content;
  min-height: 0;
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
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

`
