import styled from "styled-components";

const Container = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 1vw;
  align-items: center;
  @media (max-width: 1024px) {
    row-gap: 3vw;
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
  @media (max-width: 1024px) {
    font-size: 3vw;
  }
`

type SkillType = {
  skill: {
    imageUrl: string
    name?: string
  }
}
function Other({skill}:SkillType){
  return(
    <Container>
      <Img src={skill.imageUrl} alt={skill.name} />
      <Name>{skill.name}</Name>
    </Container>
  )
}
export default Other;