import styled from "styled-components";

import Project from "../components/project/Project";

import { web, app, ing } from "../constants/project";
import { useEffect, useRef, useState } from "react";

const Outer = styled.div`
  padding: 3vw 0;
  @media (max-width: 1024px) {
    padding: 10vw 0; 
  }
`
const Container = styled.article`
  height: 45vw;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  &>*{
    display: none;
  }
  &>:nth-child(${props=>props.className}){
    display: flex;
  }
  @media (max-width: 1024px) {
    height: 222vh;
    flex-direction: column;
    row-gap: 6vw;
    &>*{
      display: flex;
    }
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
    top: 0;
    bottom: 0;
    width: 1.5vw;
    border: none;
  }
  @media (max-width: 1024px) {
    height: 74vh;
    width: 94vw;
    &>button{
      width: 2.7vw;
      font-size: 2vw;
    }
  }
`
const ProjectBox = styled.div`
  display: flex;
  transform: translateX(-${props=>56*Number(props.className)}vw);
  transition: .8s;
  @media (max-width: 1024px) {
    transform: translateX(-${props=>94*Number(props.className)}vw);
  }
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
  animation: ${props=>props.className==="0"? "RightButton .8s infinite" : null };
  @keyframes RightButton {
    0%{transform: translateX(-10%) scaleX(120%);}
    100%{transform: translateX(10%) scaleX(120%);}
  }
  &:hover{
    background: linear-gradient(to left, rgb(180, 180, 180), white);
  }
  @media (max-width: 1024px) {
    animation: none;
  }
`

type ProjectContainerType = {
  isPage: number
  setIsPage: (number: number) => void
  isProjectSection: number
  setIsProjectSection: (num: number) => void
}
function ProjectContainer({isPage,setIsPage,isProjectSection,setIsProjectSection}: ProjectContainerType){
  const [isWebPageNumber,setIsWebPageNumber] = useState<number>(0);
  const [isAppPageNumber,setIsAppPageNumber] = useState<number>(0);
  const [isIngPageNumber,setIsIngPageNumber] = useState<number>(0);

  const webRef = useRef<HTMLDivElement>(null)
  const appRef = useRef<HTMLDivElement>(null)
  const ingRef = useRef<HTMLDivElement>(null)
  const observber = new IntersectionObserver(()=>setIsPage(3),{threshold: .8})
  useEffect(()=>{
    webRef.current&&observber.observe(webRef.current)
    appRef.current&&observber.observe(appRef.current)
    ingRef.current&&observber.observe(ingRef.current)
  },[])

  return(
    <Outer id="project">
      <Container className={String(isProjectSection)}>
        <Box ref={webRef}>
          <ProjectBox className={String(isWebPageNumber)}>
            {web.map(project=><Project project={project} />)}
          </ProjectBox>
          <LeftButton onClick={e=>isWebPageNumber-1>0? setIsWebPageNumber(isWebPageNumber-1) : setIsWebPageNumber(0)}>&lt;</LeftButton>
          <RightButton className={String(isWebPageNumber)} onClick={e=>isWebPageNumber<web.length-1? setIsWebPageNumber(isWebPageNumber+1) : setIsWebPageNumber(web.length-1)}>&gt;</RightButton>
        </Box>
        <Box ref={appRef}>
          <ProjectBox className={String(isAppPageNumber)}>
            {app.map(project=><Project project={project} />)}
          </ProjectBox>
          <LeftButton onClick={e=>isAppPageNumber-1>0? setIsAppPageNumber(isAppPageNumber-1) : setIsAppPageNumber(0)}>&lt;</LeftButton>
          <RightButton className={String(isAppPageNumber)} onClick={e=>isAppPageNumber<app.length-1? setIsAppPageNumber(isAppPageNumber+1) : setIsAppPageNumber(app.length-1)}>&gt;</RightButton>
        </Box>
        <Box ref={ingRef}>
          <ProjectBox className={String(isIngPageNumber)}>
            {ing.map(project=><Project project={project} />)}
          </ProjectBox>
          <LeftButton onClick={e=>isIngPageNumber-1>0? setIsIngPageNumber(isIngPageNumber-1) : setIsIngPageNumber(0)}>&lt;</LeftButton>
          <RightButton className={String(isIngPageNumber)} onClick={e=>isIngPageNumber<ing.length-1? setIsIngPageNumber(isIngPageNumber+1) : setIsIngPageNumber(ing.length-1)}>&gt;</RightButton>
        </Box>
      </Container>
    </Outer>
  )
}
export default ProjectContainer;