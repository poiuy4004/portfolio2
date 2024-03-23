import styled from "styled-components";

const Container = styled.li`
  display: flex;
  column-gap: 3vw;
  align-items: center;
`
const Img = styled.img`
  height: 3vw;
  width: 3vw;
`
const Name = styled.h3`
  font-size: 1vw;
  &::before{
    content: "${props=>props.className}";
  }
  @media (max-width: 1024px) {
    &.React-Native::before,&.Typescript::before{
      display: none;
    }
    &.React-Native::after,&.Typescript::after{
      content: "${props=>props.className==="React-Native"? "RN" : props.className==="Typescript"&&"TS"}";
    }
  }
`

type SkillType = {
  skill: {
    imageUrl: string
    name: string
  }
}
function Skill({skill}:SkillType){
  return(
    <Container>
      <Img src={skill.imageUrl} alt="" />
      <Name className={skill.name} />
    </Container>
  ) 
}
export default Skill;