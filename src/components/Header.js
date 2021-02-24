import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

function Header({onToggleDark, isDark}) {
  function handleToggle(){
    onToggleDark(!isDark)
  }
  console.log(isDark)
  return (
    <Container isDark={isDark}>
      <ToggleContainer onClick={handleToggle}>
        {isDark ? <WbSunnyIcon/> : <NightsStayIcon/>}
      </ToggleContainer>
      <Main>
        <AccessTimeIcon/>
        <SearchContainer>
          <Search>
            <input type="text" placeholder="Search..."></input>
          </Search>
        </SearchContainer>
        <HelpOutlineIcon/>
      </Main>
      <UserContainer>
        <Name>
          Danny
        </Name>
        <UserImage>
          <img src="https://i.imgur.com/6VBx3io.png" alt="profile"></img>
        </UserImage>
      </UserContainer>

    </Container>
  )
}

export default Header

const Container = styled.header`
  align-items: center;
  background: #350d36;
  box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.1);
  color: white;
  display: flex;
  justify-content: center;
  position: relative;
`

const Main = styled.div`
  display: flex;
  margin-left: 16px;
  margin-right: 16px;
`

const ToggleContainer = styled.div`
  position: absolute;
  left: 0;
  padding-left: 16px;
  cursor: pointer;
`

const SearchContainer = styled.div`
  min-width: 400px;
  margin-left: 16px;
  margin-right: 16px;
`

const Search = styled.div`
  box-shadow: inset 0 0 0 1px rgb(104, 74, 104);
  width: 100%;
  border-radius: 6px;
  display: flex;
  align-items: center;

  input{
    background: transparent;
    width: 100%;
    border: none;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 4px;
    padding-bottom: 4px;
    color: white;
  }

  input:focus{
    outline: none;
  }
`

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  position: absolute; 
  right: 0
`

const Name = styled.div`
  padding-right: 16px;
`

const UserImage = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid white;
  border-radius: 3px;

  img {
    width: 100%;
  }
`
