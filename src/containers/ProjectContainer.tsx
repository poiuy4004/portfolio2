import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { logo_drlucidPng, logo_armyjobPng } from "../assets/images/projectImage";

import Project from "../components/project/Project";


const Container = styled.article`
  padding: 3vw 0;
  @media (max-width: 1024px) {
    padding: 10vw 0; 
  }
`
const Box = styled.section`
  min-height: 45vw;
  @media (max-width: 1024px) {
    min-height: 222vh;
  }
`
const SelectProjectBox = styled.div`
  display: flex;
  justify-content: space-around;
`
const SelectProjectButton = styled.button`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100;
  border-radius: 50%;
`

type ProjectContainerType = {
  isPage: number
  setIsPage: (number: number) => void
}
function ProjectContainer({isPage,setIsPage}: ProjectContainerType){
  const projectRef = useRef<HTMLDivElement>(null)
  const observber = new IntersectionObserver(()=>setIsPage(3),{threshold: .8})
  useEffect(()=>{
    projectRef.current&&observber.observe(projectRef.current)
  },[])
  return(
    <Container id="project" ref={projectRef}>
      <SelectProjectBox>
        <SelectProjectButton style={{backgroundColor: "rgb(14,120,223)"}}><img width="55%" height="55%" src={logo_drlucidPng} style={{marginLeft: 3}} /></SelectProjectButton>
        <SelectProjectButton><img width="100%" height="100%" src={logo_armyjobPng} /></SelectProjectButton>
        <SelectProjectButton><img width="100%" height="100%" src={logo_armyjobPng} /></SelectProjectButton>
        <SelectProjectButton><img width="100%" height="100%" src={logo_armyjobPng} /></SelectProjectButton>
        <SelectProjectButton><img width="100%" height="100%" src={logo_armyjobPng} /></SelectProjectButton>
        <SelectProjectButton><img width="100%" height="100%" src={logo_armyjobPng} /></SelectProjectButton>
        <SelectProjectButton><img width="100%" height="100%" src={logo_armyjobPng} /></SelectProjectButton>
      </SelectProjectBox>
      <Box>

      </Box>
    </Container>
  )
}
export default ProjectContainer;