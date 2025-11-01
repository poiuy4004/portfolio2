import styled from "styled-components";

import Skill from "../components/skill/Skill";
import Other from "../components/skill/Other";
import { frontendSkills, backendSkills, otherSkills } from "../constants/skill";
import { useEffect, useRef } from "react";

const Container = styled.article`
  padding: 3vw 0;
  @media (max-width: 1024px) {
    padding: 10vw 0;
  }
`
const Box = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 1.5vw;
  @media (max-width: 1024px) {
    row-gap: 6vw;
  }
`
const DevSkillBox = styled.section`
  display: flex;
  column-gap: 3vw;
  @media (max-width: 1024px) {
    flex-direction: column;
    row-gap: 6vw;
  }
`
const SectionBox = styled.p`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1vw 3vw 0;
  border-radius: 14px;
  background-color: white;
  &>h2{
    width: max-content;
    font-size: 2vw;
  }
  &>h2>:last-child{
    border: solid .3vw rgb(140, 140, 70);
    border-bottom-right-radius: 999px;
  }
  @media (max-width: 1024px) {
    padding: 3vw;
    &>h2{
      font-size: 10vw;
    }
    &>h2>:last-child{
      border: solid 1vw rgb(140, 140, 70);
      border-bottom-right-radius: 999px;
    }
  }
`
const SkillBox = styled.ul`
  padding: 2vw;
  display: flex;
  flex-direction: column;
  row-gap: 2.5vh;
  list-style: none;
  @media (max-width: 1024px) {
    padding: 10vw 2vw;
    justify-content: space-between;
    flex-direction: row;
    column-gap: 5vw;
  }
`
const OtherBox = styled(SkillBox)`
  padding: 3vw 1vw;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    padding: 10vw 2vw;
    column-gap: 5vw;
  }
`
type skillContainerType = {
  isPage: number
  setIsPage: (number: number) => void
}
function SkillContainer({isPage, setIsPage}: skillContainerType){
  const skillRef = useRef<HTMLElement>(null)
  const observber = new IntersectionObserver(()=>{setIsPage(2)},{threshold: .8})
  useEffect(()=>{
    skillRef.current&&observber.observe(skillRef.current)
  },[])
  return(
    <Container id="skill" ref={skillRef}>
      <Box>
        <DevSkillBox>
          <SectionBox>
            <h2><div>Frontend</div><div></div></h2>
            <SkillBox>
              {frontendSkills.map((skill,idx)=><Skill skill={skill} key={idx} />)}
            </SkillBox>
          </SectionBox>
          <SectionBox>
            <h2><div>Backend</div><div></div></h2>
            <SkillBox>
              {backendSkills.map((skill,idx)=><Skill skill={skill} key={idx} />)}
            </SkillBox>
          </SectionBox>
        </DevSkillBox>
        <SectionBox>
          <h2><div>Others</div><div></div></h2>
          <OtherBox>
            {otherSkills.map((skill,idx)=><Other skill={skill} key={idx} />)}
          </OtherBox>
        </SectionBox>
      </Box>
    </Container>
  )
}
export default SkillContainer;