import styled from "styled-components";

const Container = styled.section`
  height: 37vw;
  margin-top: 3vh;
  padding: 3vh 2vw;
  border-radius: 14px;
  background-color: white;
  @media (max-width: 1024px) {
    height: 77vh;
  }
  &>h1{
    padding-bottom: 2vh;
  }
`
const Box = styled.p`
  height: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ImgBox = styled.div`
  width: 48%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContentBox = styled.div`
  width: 48%;
  min-height: 77%;
  display: flex;
  flex-direction: column;
  row-gap: 5vh;
  &>div{
    display: flex;
    flex-direction: column;
    row-gap: 1vh;
  }
  &>div>p{
    padding-left: .5vw;
    font-size: 1.2vw;
  }
`

type projectType = {
  project: {
    name: string
    image: string
    detail: string
    role: string
    skill: Array<string>
    linkUrl: string
  }
}
function Project({project}: projectType){
  return(
    <Container>
      <h1>{project.name}</h1>
      <Box>
      <ImgBox>
        <img height="100%" src={project.image} style={{maxWidth: "100%",}} />
      </ImgBox>
      <ContentBox>
        <div>
          <h2>{project.detail}</h2>
        </div>
        <div>
          <h2>프로젝트 역할</h2>
          <p>{project.role}</p>
        </div>
      </ContentBox>
      </Box>
    </Container>
  )
}
export default Project;