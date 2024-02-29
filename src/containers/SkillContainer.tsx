import styled from "styled-components";

import Skill from "../components/skill/Skill";
import Other from "../components/skill/Other";
import { frontendSkills, backendSkills, otherSkills } from "../constants/skill";

const Container = styled.article`
  padding: 3vw;
`
const Box = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 1.5vw;
`
const DevSkillBox = styled.section`
  display: flex;
  column-gap: 3vw;
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
`
const SkillBox = styled.section`
  padding: 2vw;
  display: flex;
  flex-direction: column;
  row-gap: 1vw;
`
const OtherBox = styled(SkillBox)`
  padding: 3vh;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`

function SkillContainer(){
  return(
    <Container>
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