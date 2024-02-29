import styled from "styled-components";

const Container = styled.article`
  z-index: 999;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .3);
`
const Box = styled.section`
  padding: 2%;
  height: 80%;
  min-width: 50%;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 14px;
  background-color: rgb(242, 242, 242);
`
const Title = styled.header`
  text-align: center;
  font-size: 5vw;
  font-weight: 700;
`
const Content = styled.section`
  text-align: center;
  font-size: 3vw;
  font-weight: 500;
`
const ButtonBox = styled.footer`
  display: flex;
  column-gap: 1vw;
  justify-content: space-between;
`
const Button =styled.button`
  flex: 1;
  padding: 5%;
  border-radius: 14px;
  color: white;
  font-size: 3vw;
  text-shadow: 0 0 .1vw rgb(0, 0, 0);
`
const LeftButton = styled(Button)`
  background-color: rgba(0, 0, 255, 0.3);
  &:hover{
    background-color: rgb(114, 114, 255);
  }
`
const RightButton = styled(Button)`
  background-color: rgba(255, 0, 0, 0.3);
  &:hover{
    background-color: rgb(255, 114, 114);
  }
`

type ModalType = {
  titleText?: string
  contentText?: string
  leftButtonText?: string
  rightButtonText?: string
  leftButtonFn?: string
  rightButtonFn?: any
}
function Modal({titleText, contentText, leftButtonText, rightButtonText, leftButtonFn, rightButtonFn}:ModalType){
  return(
    <Container onClick={()=>rightButtonFn(false)}>
      <Box>
        <Title>{titleText}</Title>
        <Content>{contentText}</Content>
        <ButtonBox>
          {leftButtonText? <LeftButton>{leftButtonText}</LeftButton> : null}
          <RightButton
            onClick={()=>rightButtonFn(false)}
          >{rightButtonText}</RightButton>
        </ButtonBox>
      </Box>
    </Container>
  )
}
export default Modal;