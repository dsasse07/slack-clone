import React from 'react'
import styled from 'styled-components'
import SendIcon from '@material-ui/icons/Send';
import FlashOnOutlinedIcon from '@material-ui/icons/FlashOnOutlined';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import StrikethroughSIcon from '@material-ui/icons/StrikethroughS';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';

function ChatInput() {
  return (
    <Container>
        <InputContainer>
          <form>
            <textarea placeholder="Message Here..."></textarea>
            <SendButton>
              <Send/>
            </SendButton>
          </form>
          <InputStyleButtons>
            <FlashOnOutlinedIcon/>
            <FormatBoldIcon/>
            <FormatItalicIcon/>
            <StrikethroughSIcon/>
            <CodeIcon/>
            <LinkIcon/>
            <FormatListNumberedIcon/>
            <MoreHorizIcon/>
            <div>@</div>
            <SentimentSatisfiedOutlinedIcon/>
            <AttachFileOutlinedIcon/>
          </InputStyleButtons>
        </InputContainer>
    </Container>
  )
}

export default ChatInput

const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 24px;
`

const InputContainer = styled.div`
  border: 1px solid #8D8D8E;
  border-radius: 4px;
  
  form{
    display: flex;
    height: 60px;
    align-items: center;
    padding-left: 10px;

    textarea{
      flex: 1; //take up as much space as possible
      border: none;
      font-size: 13px;
      resize: none;
    }

    textarea:focus{
      outline:none;
    }
  }
`

const SendButton = styled.div`
  background: #007a5a;
  border-radius: 2px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  cursor: pointer;

  svg{
    width: 18px;
  }

  :hover{
    background: #148567;
  }
`

const Send = styled(SendIcon)`
  color: #d9d9d9;
` 

const InputStyleButtons = styled.div`
  border-top: 1px solid rgba(141, 141, 142, 0.3);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  svg, div{
    padding: 5px 12px;
    height: 18px;
    width: 28px;
    border-right: 1px solid rgba(141, 141, 142, 0.3);
    font-size: 18px;
  }
  div{
    padding-bottom: 8px;
  }

  svg:hover, div:hover{
    background: #eaeaea;
    cursor: pointer;
  }

  svg:first-of-type{
    border-right: 1px solid rgba(141, 141, 142, 0.3);
  }
` 