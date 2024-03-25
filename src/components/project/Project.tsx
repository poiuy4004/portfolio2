import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.section`
  position: relative;
  padding: 1vw 3vw;
  display: flex;
  flex-direction: column;
  row-gap: 2vw;
  text-align: center;
  &>h2{font-size: 2vw;}
`
const ImageBox = styled.div`
  height: 37vw;
  width: 50vw;
  border: dotted 1px gray;
  background-image: url(${props=>props.className});
  background-position-x: center;
  background-position-y: top;
  background-repeat: no-repeat;
  background-size: contain;
`
const Box = styled.div`
  display: flex;
  justify-content: space-evenly;
  & button{
    padding: .5vw 1vw;
    border-radius: 37px;
    color: white;
    font-size: 1vw;
    font-weight: 700;
  }
  &>button{
    background-color: rgb(128, 128, 188);
    &:active{
      color: black;
      background-color: rgb(128, 128, 255);
    }
  }
  &>a>button{
    background-color: rgb(0, 188, 0);
    &:active{
      color: black;
      background-color: rgb(128, 255, 128);
    }
  }
`
const DetailBox = styled.p`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1vw 3vw;
  display: flex;
  flex-direction: column;
  row-gap: 1.4vw;
  border-radius: 14px;
  background-color: white;
  &>h3{font-size: 2vw;}
  &>p{
    padding: 0 7vw;
    font-size: 1.4vw;
    text-align: left;
  }
  &>ul{
    display: flex;
    column-gap: 1vw;
    justify-content: center;
    list-style: none;
  }
`
const Skill = styled.li`
  border-radius: 50px;
  padding: .5vw 1vw;
  color: white;
  font-size: 1vw;
  background-color: rgb(0, 0, 114);
`
const DetailImageBox = styled.div`
  flex: 1;
  border: dotted 1px gray;
  background-image: url(${props=>props.className});
  background-position-x: center;
  background-position-y: top;
  background-repeat: no-repeat;
  background-size: cover;
`

type projectType = {
  project: {
    name: string
    image: string
    detail: string
    skill: Array<string>
    linkUrl: string
  }
}
function Project({project}:projectType){
  const [isDetail,setIsDetail] = useState(false);
  return(
    <Container>
      <h2>{project.name}</h2>
      <ImageBox className={project.image} />
      <Box>
        <button onClick={e=>setIsDetail(true)}>세부정보</button>
        <Link to={project.linkUrl} target="_blank"><button>배포링크</button></Link>
        {isDetail&&<DetailBox
          onClick={e=>setIsDetail(false)}
        >
          <h3>세부정보</h3>
          <DetailImageBox className={project.image} />
          <p>{project.detail}</p>
          <ul>
            {project.skill.map(skill=><Skill>{skill}</Skill>)}
          </ul>
          <desc>아무 곳이나 눌러서 뒤로가기</desc>
        </DetailBox>}
      </Box>
    </Container>
  )
}
export default Project;