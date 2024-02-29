import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";

import PuzzleImg from "../assets/images/puzzleImg.png";

const Container = styled.article`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Box = styled.section`
  width: 90vw;
  background-color: white;
  box-shadow: inset 0 0 5px 5px olive;
`
function Puzzle(){
  const navigate = useNavigate();
  return(
    <Container>
      <Box>
        <JigsawPuzzle
          imageSrc={PuzzleImg}
          rows={2}
          columns={3}
          onSolved={()=>navigate("/intro")}
        />
      </Box>
    </Container>
  )
}
export default Puzzle;