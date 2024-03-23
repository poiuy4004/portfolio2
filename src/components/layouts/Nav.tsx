import styled from "styled-components";

const NavBox = styled.ul`
  & *{
    text-decoration: none;
  }
  &>:nth-child(${props=>props.className})>*{
    border-radius: 500px !important;
    background-color: rgba(0, 128, 0, .2) !important;
  }
  &>:nth-child(3)>*{
    border-radius: 30px !important;
  }
`
const NavButton = styled.li`
  padding: 1vw !important;
  color: black;
  font-size: 3vw !important;
  font-weight: 100 !important;
  text-decoration: none;
`
const ProjectBox = styled.ul`
  padding-left: 3vw;
  &>:nth-child(${props=>(props.itemProp?.[0]==="3")? (props.itemProp?.[2]) : 99}){
    color: rgb(0, 0, 128);
    text-decoration: underline solid yellow 5px !important;
  }
`

type NavType = {
  isPage: number
  setIsPage: (newValue: number) => void
  isProjectSection: number
  setIsProjectSection: (newValue: number) => void
}
function Nav({isPage, setIsPage, isProjectSection, setIsProjectSection}:NavType){
  return(
    <nav>
      <NavBox className={String(isPage)}>
        <a href="#intro" onClick={e=>setIsPage(1)}><NavButton>Intro</NavButton></a>
        <a href="#skill" onClick={e=>setIsPage(2)}><NavButton>Skill</NavButton></a>
        <a href="#project" onClick={e=>setIsPage(3)}><NavButton>Project
          <ProjectBox itemProp={isPage+" "+isProjectSection}>
            <NavButton onClick={e=>setIsProjectSection(1)}>Web</NavButton>
            <NavButton onClick={e=>setIsProjectSection(2)}>App</NavButton>
            <NavButton onClick={e=>setIsProjectSection(3)}>⋯ing</NavButton>
          </ProjectBox>
        </NavButton></a>
        <a href="#contact" onClick={e=>setIsPage(4)}><NavButton>Contact</NavButton></a>
      </NavBox>
    </nav>
  )
}
export default Nav;