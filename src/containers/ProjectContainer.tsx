import styled from "styled-components";

import Project from "../components/project/Project";

import { web, app, ing } from "../constants/project";
import { useState } from "react";

const Container = styled.article`
  height: 45vw;
  border-radius: 14px;
  background-color: white;
  &>*{
    display: none;
  }
  &>:nth-child(${props=>props.className}){
    display: flex;
  }
`
const Box = styled.div`
  position: relative;
  height: 45vw;
  width: 56vw;
  border-radius: 14px;
  background-color: white;
  overflow: hidden;
  &>button{
    position: absolute;
    height: 100%;
    width: 1.5vw;
    border: none;
  }
`
const ProjectBox = styled.div`
  display: flex;
  transform: translateX(-${props=>56*Number(props.className)}vw);
  transition: .8s;
`
const LeftButton = styled.button`
  left: 0;
  border-radius: 14px 0 0 14px;
  background: linear-gradient(to right, rgb(222, 222, 222), white);
  &:hover{
    background: linear-gradient(to right, rgb(180, 180, 180), white);
  }
`
const RightButton = styled.button`
  right: 0;
  border-radius: 0 14px 14px 0;
  background: linear-gradient(to left, rgb(222, 222, 222), white);
  &:hover{
    background: linear-gradient(to left, rgb(180, 180, 180), white);
  }
`

type ProjectContainerType = {
  isProjectSection: number
}
function ProjectContainer({isProjectSection}:ProjectContainerType){
  const [isWebPageNumber,setIsWebPageNumber] = useState<number>(0);
  const [isAppPageNumber,setIsAppPageNumber] = useState<number>(0);
  const [isIngPageNumber,setIsIngPageNumber] = useState<number>(0);
  return(
    <Container id="#project" className={String(isProjectSection)}>
      <Box>
        <ProjectBox className={String(isWebPageNumber)}>
          {web.map(project=><Project project={project} />)}
        </ProjectBox>
        <LeftButton onClick={e=>isWebPageNumber-1>0? setIsWebPageNumber(isWebPageNumber-1) : setIsWebPageNumber(0)}>&lt;</LeftButton>
        <RightButton onClick={e=>isWebPageNumber<web.length-1? setIsWebPageNumber(isWebPageNumber+1) : setIsWebPageNumber(web.length-1)}>&gt;</RightButton>
      </Box>
      <Box>
        <ProjectBox className={String(isAppPageNumber)}>
          {app.map(project=><Project project={project} />)}
        </ProjectBox>
        <LeftButton onClick={e=>isAppPageNumber-1>0? setIsAppPageNumber(isAppPageNumber-1) : setIsAppPageNumber(0)}>&lt;</LeftButton>
        <RightButton onClick={e=>isAppPageNumber<app.length-1? setIsAppPageNumber(isAppPageNumber+1) : setIsAppPageNumber(app.length-1)}>&gt;</RightButton>
      </Box>
      <Box>
        <ProjectBox className={String(isIngPageNumber)}>
          {ing.map(project=><Project project={project} />)}
        </ProjectBox>
        <LeftButton onClick={e=>isIngPageNumber-1>0? setIsIngPageNumber(isIngPageNumber-1) : setIsIngPageNumber(0)}>&lt;</LeftButton>
        <RightButton onClick={e=>isIngPageNumber<ing.length-1? setIsIngPageNumber(isIngPageNumber+1) : setIsIngPageNumber(ing.length-1)}>&gt;</RightButton>
      </Box>
    </Container>
  )
}
export default ProjectContainer;