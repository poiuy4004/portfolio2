import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { logo_drlucidPng, logo_armyjobPng } from "../assets/images/projectImage";

import Project from "../components/project/Project";

import {all} from "../constants/project";

const Container = styled.article`
  padding: 3vw 0;
  @media (max-width: 1024px) {
    padding: 12vw 0; 
  }
`
const SelectProjectBox = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  row-gap: 3vh;
`
const SelectProjectButton = styled.li`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100;
  border-radius: 50%;
  overflow: hidden;
  &:hover{
    transform: scale(120%);
    transition: all.3s;
  }
`

type ProjectContainerType = {
  isPage: number
  setIsPage: (number: number) => void
}
function ProjectContainer({isPage,setIsPage}: ProjectContainerType){
  const [isProject, setIsProject] = useState(0);
  const projectRef = useRef<HTMLDivElement>(null)
  const observber = new IntersectionObserver(()=>setIsPage(3),{threshold: .8})
  useEffect(()=>{
    projectRef.current&&observber.observe(projectRef.current)
  },[])
  return(
    <Container id="project" ref={projectRef}>
      <SelectProjectBox>
        {all.map((project,idx)=>(
          <SelectProjectButton
           onClick={()=>setIsProject(idx)}
          >
            <img width="100%" height="100%" src={project.icon} alt="" />
          </SelectProjectButton>
        ))}
      </SelectProjectBox>
      <Project project={all[isProject]} />
    </Container>
  )
}
export default ProjectContainer;