import styled from "styled-components";

const NavBox = styled.ul`
  &>:nth-child(${props=>props.itemProp}){
    border-radius: 500px;
    background-color: rgba(0, 128, 0, .2);
  }
  &>:nth-child(3){
    border-radius: 50px;
  }
`
const NavButton = styled.button`
  padding: 1vw;
  font-size: 3vw;
  font-weight: 100;
`
const ProjectBox = styled.ul`
  padding-left: 3vw;
  &>:nth-child(${props=>(props.itemProp?.[0]==="3")? (props.itemProp?.[2]) : 99}){
    color: blue;
    &>button{
      text-decoration: underline solid yellow 5px;
    }
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
      <NavBox itemProp={String(isPage)}>
        <li><NavButton onClick={e=>setIsPage(1)}>Intro</NavButton></li>
        <li><NavButton onClick={e=>setIsPage(2)}>Skill</NavButton></li>
        <li>
          <h5><NavButton onClick={e=>setIsPage(3)}>Project</NavButton></h5>
          <ProjectBox itemProp={isPage+" "+isProjectSection}>
            <li><NavButton onClick={e=>setIsProjectSection(1)}>⋯ing</NavButton></li>
            <li><NavButton onClick={e=>setIsProjectSection(2)}>Web</NavButton></li>
            <li><NavButton onClick={e=>setIsProjectSection(3)}>App</NavButton></li>
          </ProjectBox>
        </li>
        <li><NavButton onClick={e=>setIsPage(4)}>Contact</NavButton></li>
      </NavBox>
    </nav>
  )
}
export default Nav;