import styled from "styled-components";

import Project from "../components/project/Project";

const Container = styled.article`
  height: 100vh;
  padding: 3vw;
  overflow: hidden;
`
const Box = styled.section`
  display: flex;
`

type ProjectContainerType = {
  isProjectSection: number
}
function ProjectContainer({isProjectSection}:ProjectContainerType){
  return(
    <Container>
      <Box className="1" itemProp={String(isProjectSection)}>
        
      </Box>
      <Box className="2" itemProp={String(isProjectSection)}>
        
      </Box>
      <Box className="3" itemProp={String(isProjectSection)}>
        
      </Box>
    </Container>
  )
}
export default ProjectContainer;