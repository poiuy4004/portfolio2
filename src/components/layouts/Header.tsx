import styled from "styled-components";
import Nav from "./Nav";

const Container = styled.header`
  z-index: 9;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 7vw;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: white;
  box-shadow: 0 -5vw 10vw 1vw rgb(128,128,128);
  @media (min-width: 1025px) {
    display: none;
  }
`

type headerType = {
  isPage: number
  setIsPage: (newValue: number) => void
}
function Header({isPage, setIsPage}: headerType){
  return(
    <Container>
      <Nav isPage={isPage} setIsPage={setIsPage} />
    </Container>
  )
}
export default Header;