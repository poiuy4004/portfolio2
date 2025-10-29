import styled from "styled-components";

const Container = styled.li`
  display: flex;
  column-gap: 3vw;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
    row-gap: 3vw;
  }
  &>svg{
    height: 3vw;
    width: 3vw;
    @media (max-width: 1024px) {
      height: 10vw;
      width: 10vw;
    }
  }
`
const Img = styled.img`
  height: 3vw;
  width: 3vw;
  @media (max-width: 1024px) {
    height: 10vw;
    width: 10vw;
  }
`
const Name = styled.h3`
  font-size: 1vw;
  &::before{
    content: "${props=>props.className}";
  }
  @media (max-width: 1024px) {
    font-size: 3vw;
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
      <skill.imageUrl />
      <Name className={skill.name} />
    </Container>
  ) 
}
export default Skill;