import styled from "styled-components";

import Project from "../components/project/Project";

const Container = styled.article`
  overflow: hidden;
`
const Box = styled.section`
  display: flex;
`

type ContactContainerType = {
  isProjectSection: number
}
function ContactContainer({isProjectSection}:ContactContainerType){
  return(
    <Container id="#contact">
      <Box className="1" itemProp={String(isProjectSection)}>
        
      </Box>
      <Box className="2" itemProp={String(isProjectSection)}>
        
      </Box>
      <Box className="3" itemProp={String(isProjectSection)}>
        
      </Box>
    </Container>
  )
}
export default ContactContainer;