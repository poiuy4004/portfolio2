import { useEffect, useRef } from "react";
import styled from "styled-components";
import { web, app, ing } from "../constants/project";

const Container = styled.article`
  height: 100vh;
  padding: 3vw 0;
  @media (max-width: 1024px) {
    padding: 10vw 0;
  }
`
const Box = styled.section`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  backface-visibility: visible;
  &>div{
    position: absolute;
    transform-style: preserve-3d;
    perspective: 0vw;
    height: 100vh;
  }
  &>:nth-last-child(2){
    left: 0;
    right: 50vw;
    overflow-y: hidden;
  }
  &>:nth-last-child(2):hover{
    z-index: 9;
    left: 0;
    right: 0;
    overflow-y: visible;
  }
  &>:nth-last-child(2)>ul{
    transform: rotateY(.1deg);
    opacity: 14%;
    transition: .8s;
    pointer-events: all;
  }
  &>:nth-last-child(2):hover>ul{
    transform: translateX(-27vw) rotateY(0);
    opacity: 100%;
  }
  &>h1{
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3vw;
    pointer-events: none;
  }
  &>:last-child{
    left: 50vw;
    right: 0;
    overflow-y: hidden;
  }
  &>:last-child:hover{
    z-index: 999;
    overflow-y: visible;
  }
  &>:last-child>ul{
    transform: rotateY(179.9deg);
    opacity: 14%;
    transition: .8s;
    pointer-events: all;
  }
  &>:last-child>ul:hover{
    transform: rotateY(180deg);
    opacity: 100%;
  }
  &>:last-child>ul>a{
    transform: rotateY(180deg);
  }
  @media (max-width: 1024px) {
    &>div{
      display: none;
    }
    &>h1{
      font-size: 7vw;
    }
  }
`
const ImageContainer = styled.ul`
  height: 90vh;
  width: 50vw;
  display: flex;
  list-style: none;
`
const ImageBox = styled.li`
  display: flex;
  column-gap: 1.5vw;
  &>img{
    height: 94vh;
  }
`
const MobileBox = styled.span`
  display: none;
  @media (max-width: 1024px) {
    z-index: -999;
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    overflow: hidden;
    &>ul{
      opacity: 24%;
      animation: backgroundSlide linear 37s infinite;
      @keyframes backgroundSlide {
        0%{
          transform: translateX(0);
        }
        100%{
          transform: translateX(-${web.concat(app).length*700}%);
        }
      }
    }
  }
`

type introContainerType = {
  isPage: number
  setIsPage: (number: number) => void
}
function IntroContainer({isPage, setIsPage}: introContainerType){
  const introRef = useRef<HTMLElement>(null)
  const observber = new IntersectionObserver(()=>{setIsPage(1)},{threshold: .8})
  useEffect(()=>{
    introRef.current&&observber.observe(introRef.current)
  },[])
  return(
    <Container id="intro" ref={introRef}>
      <Box>
        <MobileBox>
          <ImageContainer>
            {web.concat(app).map(project=><a href={project.linkUrl} target="_blank"><ImageBox><img src={project.image} /></ImageBox></a>)}
          </ImageContainer>
        </MobileBox>
        <h1>Frontend Developer YongMin</h1>
        <div>
          <ImageContainer>
            {web.map(project=><a href={project.linkUrl} target="_blank"><ImageBox><img src={project.image} /></ImageBox></a>)}
          </ImageContainer>
        </div>
        <div>
          <ImageContainer>
            {app.map(project=><a href={project.linkUrl} target="_blank"><ImageBox><img src={project.image} /></ImageBox></a>)}
          </ImageContainer>
        </div>
      </Box>
    </Container>
  )
}
export default IntroContainer;