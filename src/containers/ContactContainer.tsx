import styled from "styled-components";
import KakaoTalk from "../components/Kakaotalk";
import { BlackCircleSvg, KakaotalkSvg, GithubSvg } from "../assets/svgs/contact";

import { useEffect, useRef, useState } from "react";

const Container = styled.section`
  padding: 3vw 0;
  height: 94vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-size: 5vw;
  font-weight: 700;
  @media (max-width: 1024px) {
    padding: 10vw 0;
    font-size: 10vw;
  }
`
const Name = styled.strong`
  color: black;
  text-shadow: 0.2vw 0.2vw 0 rgba(0,128,0,0.3);
`
const TypingText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  text-align: left;
  align-items: center;
  height: 7vw;
  &>div{
    position: absolute;
    visibility: hidden;
  }
  &>div::after{
    position: absolute;
    top: 0; left: 0;
    visibility: visible;
    white-space: pre;
    overflow: hidden;
    animation: typing 3s infinite;
    content: "Developer YongMin";
    @keyframes typing {
      0%{width: 0%; border-right: 0.8vw solid rgb(102, 102, 102);}
      25%{width: 100%; border-right: 0.8vw solid rgb(102, 102, 102);}
      26%{border: none;}
      77%{border: none;}
      78%{width: 100%; border-right: 0.8vw solid rgb(102, 102, 102);}
      90%{width: 0%; border-right: 0.8vw solid rgb(102, 102, 102);}
      91%{border: none;}
      100%{width: 0%; border: none;}
    }
  }
`

const IconContainer = styled.div`
  display: flex;
  &>*{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7vw;
    height: 7vw;
    cursor: pointer;
  }
  &>*>:first-child{
    position: absolute;
    width: 5vw;
    height: 5vw;
    animation: threeBorder 1s ease-in-out forwards;
    fill: gray;
    stroke-dasharray: 37;
    stroke-width: .2vw;
    transition: all .2s ease-in-out;
  }
  &>*:hover>:first-child{
    fill: white;
    stroke-width: 3vw;
    transition: all .2s ease-in-out;
  }
  &>:nth-child(1):hover>:first-child{
    stroke: red;
    animation: circleBorder 1s ease-in-out forwards, colorRed 1s linear forwards;
  }
  &>:nth-child(2):hover>:first-child{
    stroke: yellow;
    animation: circleBorder 1s ease-in-out forwards, colorYellow 1s linear forwards;
  }
  &>:nth-child(3):hover>:first-child{
    stroke: green;
    animation: circleBorder 1s ease-in-out forwards, colorGreen 1s linear forwards;
  }
  &>:nth-child(4):hover>:first-child{
    stroke: blue;
    animation: circleBorder 1s ease-in-out forwards, colorBlue 1s linear forwards;
  }
  &>:nth-child(5):hover>:first-child{
    stroke: black;
    animation: circleBorder 1s ease-in-out forwards, colorBlack 1s linear forwards;
  }
  &>*>:nth-child(2){
    position: absolute;
    width: 7vw;
    height: 7vw;
    color: white;
    font-size: 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.2vw;
  }
  &>:nth-child(2)>:nth-child(2){
    fill: yellow;
    width: 7vw;
    height: 7vw;
    font-size: 1vw;
    &>*{
      width: 1.8vw;
      height: 1.8vw;
    }
  }
  &>:nth-child(2):hover>:nth-child(2){
    fill: black;
    width: 7vw;
    height: 7vw;
  }

  &>:nth-child(5)>:nth-child(2){
    margin: .5vw 0 0 0;
    height: 2.4vw;
    width: 2.4vw;
    fill: white;
  }
  &>:nth-child(5):hover>:nth-child(2){
    fill: black;
  }
  @keyframes threeBorder {
    0% {
      stroke: black;
      stroke-dasharray: 555;
    }
    100% {
      stroke: black;
      stroke-dasharray: 84;
    }
  }
  @keyframes circleBorder {
    100% {
      stroke-dasharray: 555;
      stroke-width: .7vw;
    }
  }
  @keyframes colorRed {100% {stroke: red;}}
  @keyframes colorYellow {100% {stroke: yellow;}}
  @keyframes colorBlue {100% {stroke: blue;}}
  @keyframes colorBlack {100% {stroke: black;}}
  @keyframes colorGreen {100% {stroke: green;}}
  @media (max-width: 1024px) {
    &>:nth-child(4),&>:nth-child(5){
      display: none;
    }
    &>*{
      width: 30vw;
      height: 30vw;
    }
    &>*>:first-child{
      width: 20vw;
      height: 20vw;
      stroke-width: 1vw;
    }
    &>*:hover>:first-child{
      stroke-width: 24vw;
    }
    &>*>:nth-child(2){
      width: 20vw;
      height: 20vw;
      font-size: 7vw;
    }
    &>:nth-child(2)>:nth-child(2){
      width: 20vw;
      height: 20vw;
      font-size: 7vw;
      &>*{
        width: 7vw;
        height: 7vw;
      }
    }
    &>:nth-child(2):hover>:nth-child(2){
      width: 20vw;
      height: 20vw;
    }
  }
`
type contactContainerType = {
  isPage: number
  setIsPage: (number: number) => void
}
function ContactContainer({isPage,setIsPage}: contactContainerType){
  const [isModalOpen,setIsModalOpen] = useState(true);

  const contactRef = useRef<HTMLElement>(null)
  const observber = new IntersectionObserver(()=>{setIsPage(4)},{threshold: .8})
  useEffect(()=>{
    contactRef.current&&observber.observe(contactRef.current)
  },[])

  return(
    <Container id="contact" ref={contactRef}>
      <div><Name>장용민</Name></div>
      <TypingText>
        <div>Developer YongMin</div>
      </TypingText>
      <IconContainer>
        <a href="tel:010-7184-2594" target="_blank" rel="noreferrer noopener">
          <BlackCircleSvg />
          <div>
            <div>📞</div>
          </div>
        </a>
        <div onClick={()=>{setIsModalOpen(true)}}>
          <BlackCircleSvg />
          <div>
            <div><KakaotalkSvg /></div>
          </div>
        </div>
        <a href="mailto:poiuy4004@naver.com" target="_blank" rel="noreferrer noopener">
          <BlackCircleSvg />
          <div>
            <div>✉️</div>
          </div>
        </a>
        <a href="https://poiuy4004.github.io/" target="_blank" rel="noreferrer noopener">
          <BlackCircleSvg />
          <div>
            <div>💻</div>
          </div>
        </a>
        <a href="https://github.com/poiuy4004" target="_blank" rel="noreferrer noopener">
          <BlackCircleSvg />
          <div>
            <div><GithubSvg /></div>
          </div>
        </a>
      </IconContainer>
      {isModalOpen&&<KakaoTalk setIsModalOpen={setIsModalOpen} />}
    </Container>
  )
}
export default ContactContainer;