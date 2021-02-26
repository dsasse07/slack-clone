import React from 'react'
import styled from 'styled-components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import {sidebarItemsData} from '../data/SidebarData'
import db from '../firebase';
import {useHistory} from 'react-router-dom'

function Sidebar({ channels }) {

  const history = useHistory()

  function goToChannel(id) {
    if (id){
      history.push(`/channels/${id}`)
    }
  }

  const sidebarItems = sidebarItemsData.map( ({icon, text}) => {
    return(
      <MainChannelItem key={text}>
        {icon}
        {text}
      </MainChannelItem>
    )
  })

  const channelItems = channels.map( ({id, name}) => {
    return (
      <Channel key={id} onClick={ ()=>{ goToChannel(id) }}>
        <div>
          # {name}
        </div>
        <CloseIcon onClick={ () => deleteChannel(id)}/>
      </Channel>
    )
  })

  const addChannel = () => {
    const promptName = prompt('Enter channel name')
    if (promptName) db.collection('channels').add( {name: promptName} )
  }

  function deleteChannel (id) {
    let permitted = window.confirm("Confirm?")
    if (permitted) db.collection('channels').doc(id).delete()
  }

  return (
    <Container>
      <WorkSpaceContainer>
        <Name>
          WorkSpace Name
        </Name>
        <NewMessage>
          <AddCircleOutlineIcon/>
        </NewMessage>
      </WorkSpaceContainer>
      <MainChannels>
        {sidebarItems}
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          <div>
            Channels
          </div>
          <AddIcon onClick={addChannel}/>
        </NewChannelContainer>
        <ChannelsList>
          {channelItems}
        </ChannelsList>
      </ChannelsContainer>
    </Container>
  )
}

export default Sidebar

const Container = styled.aside`
  background: #3f0e40;
`

const WorkSpaceContainer = styled.div`
  align-items: center;
  border-bottom: 1px solid #532753;
  color: white;
  display: flex;
  height: 64px;
  justify-content: space-between;
  padding-left: 19px;
`
const Name = styled.div`

`

const NewMessage = styled.div`
  align-items: center;
  background: white;
  border-radius: 50%;
  color: #3f0e40;
  display: flex;
  fill: #3f0e40;
  height: 36px;
  justify-content: center;
  margin-right: 20px;
  width: 36px;
  cursor: pointer;
`
const MainChannels = styled.section`
  padding-top: 20px;
`

const MainChannelItem = styled.div`
  align-items: center;
  color: rgb(188, 171, 188);
  cursor: pointer;
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  padding-left: 19px;
  
  :hover{
    background: #350D36
  }
`

const ChannelsContainer = styled.section`
  color: rgb(188,171,188);  
  margin-top: 16px;

  `

const NewChannelContainer = styled.div`
  align-items: center;
  display: flex;
  height: 28px;
  justify-content: space-between;
  padding-left: 19px;
  padding-right: 12px;
  border-top: 1px solid #532753;
  border-bottom: 1px solid #532753;

  svg{
    border-radius: 50%;
  }

  :hover{
    background: #350D36;
  }
  :active{
    background: #532753;
  }
`

const ChannelsList = styled.section`
  padding-top: 13px;
`

const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;

  :hover{
    background: #350D36
  }

  :hover svg{
    color: rgba(188,171,188, 0.5);  
  }
  div{
    flex: 1;
  }

  svg{
    padding-right: 12px;
    height: 23px;
    width: 23px;
    color: #3f0e40;
  }

  svg:hover{
    color: rgb(188,171,188);  
  }

`