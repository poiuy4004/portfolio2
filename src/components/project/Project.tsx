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
    text-align: center;
  }
`
const Box = styled.p`
  position: relative;
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
  @media (max-width: 1024px) {
    position: absolute;
    width: 100%;
    opacity: .1;
  }
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
  &>:last-child{
    align-items: center;
  }
  &>div{
    &>button{
      width: fit-content;
      border: solid 1px rgba(0, 128, 0, .2);
      border-radius: 14px;
      background-color: rgba(0, 128, 0, .8);
      &>a{
        padding: 0 5vw;
        color: white;
        font-size: .7vw;
        font-weight: 900;
        text-decoration: none;
      }
    }
    &>button:hover{
      background-color: rgba(0, 128, 0, .5);
      &>a{
        color: black;
      }
    }
    &>button:active{
      border: none;
      background-color: rgba(0, 128, 0, .2);
      &>a{
        color: black;
      }
    }
  }
  @media (max-width: 1024px) {
    z-index: 99;
    width: 100%;
    &>div>p{
      padding-left: .5vw;
      font-size: 5vw;
    }
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
        <img height="100%" src={project.image} alt="" style={{maxWidth: "100%",}} />
      </ImgBox>
      <ContentBox>
        <div>
          <h2>{project.detail}</h2>
        </div>
        <div>
          <h2>프로젝트 역할</h2>
          <p>{project.role}</p>
        </div>
        <div>
          <button>
          <a href={project.linkUrl} target="_blank"><div>L I N K</div></a>
          </button>
        </div>
      </ContentBox>
      </Box>
    </Container>
  )
}
export default Project;