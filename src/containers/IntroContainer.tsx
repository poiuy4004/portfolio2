import styled from "styled-components";

const Container = styled.article`
`
const Box = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 1.5vw;
`

function IntroContainer(){
  return(
    <Container id="intro">
      <Box>

      </Box>
    </Container>
  )
}
export default IntroContainer;