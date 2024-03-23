import styled from "styled-components";

const Container = styled.section`
  padding: 1vw 3vw;
  display: flex;
  flex-direction: column;
  row-gap: 1vw;
  text-align: center;
  &>h2{font-size: 2vw;}
`
const ImageBox = styled.div`
  height: 37vw;
  width: 50vw;
  border: dotted 1px gray;
  background-image: url(${props=>props.className});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`
const Box = styled.p`
  
`

type projectType = {
  project: {
    name: string
    image: string
    linkUrl: string
  }
}
function Project({project}:projectType){
  return(
    <Container>
      <h2>{project.name}</h2>
      <ImageBox className={project.image} />
      <Box>
        {project.linkUrl}
      </Box>
    </Container>
  )
}
export default Project;