import styled from "styled-components";

const Container = styled.nav`
  z-index: 99999;
`
const NavBox = styled.ul`
  & *{
    text-decoration: none;
  }
  &>:nth-child(${props=>props.className})>*{
    border-radius: 500px !important;
    background-color: rgba(0, 128, 0, .2) !important;
  }
  /* &>:nth-child(3)>*{
    border-radius: 30px !important;
  } */
  @media (max-width: 1024px) {
    height: 7vw;
    display: flex;
    align-items: center;
    column-gap: 7vw;
    list-style: none;
  }
`
const NavButton = styled.li`
  padding: 1vw !important;
  color: black;
  font-size: 3vw !important;
  font-weight: 100 !important;
  text-decoration: none;
`

type NavType = {
  isPage: number
  setIsPage: (newValue: number) => void
}
function Nav({isPage, setIsPage}:NavType){
  return(
    <Container>
      <NavBox className={String(isPage)}>
        <a href="#intro" onClick={e=>setIsPage(1)}><NavButton>Intro</NavButton></a>
        <a href="#skill" onClick={e=>setIsPage(2)}><NavButton>Skill</NavButton></a>
        <a href="#project" onClick={e=>setIsPage(3)}><NavButton>Project</NavButton></a>
        <a href="#contact" onClick={e=>setIsPage(4)}><NavButton>Contact</NavButton></a>
      </NavBox>
    </Container>
  )
}
export default Nav;