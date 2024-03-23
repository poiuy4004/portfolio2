import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Modal from "../components/Modal";
import Puzzle from "../containers/Puzzle";

const Container = styled.main`
  position: absolute;
  height: 100vh;
  width: 100vw;
`
const Skip = styled.button`
  height: 5vh;
  padding: .4vw;
  position: absolute;
  bottom: 1vh;
  right: 1.4vw;
  border-radius: 14px;
  font-size: 1vw;
  font-weight: 700;
  background-color: rgb(200, 200, 100);
  &:hover{
    background-color: rgb(200, 200, 0);
  }
`

function Intro(){
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(true);
  useEffect(()=>{
    if(window.innerWidth<1025){
      navigate("/home")
    }
  },[])
  return (
    <Container>
      <Puzzle />
      <Skip onClick={()=>navigate("/home")}>퍼즐 건너뛰기 ►</Skip>
      {openModal&&<Modal titleText="퍼즐을 맞춰보세요!" contentText="퍼즐을 맞추고 포트폴리오를 확인하세요!" rightButtonText="닫기" rightButtonFn={setOpenModal} />}
    </Container>
  );
}
export default Intro;