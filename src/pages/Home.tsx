import { useState } from "react";
import styled from "styled-components";

import Nav from "../components/layouts/Nav";
import SkillContainer from "../containers/SkillContainer";
import ProjectContainer from "../containers/ProjectContainer";

import ContactContainer from "../containers/ContactContainer";

const Container = styled.main`
  padding: 3vw 22vw;
  display: flex;
  flex-direction: column;
  row-gap: 6vw;
  &>article{
    max-height: 100vh;
    max-width: 100vw;
  }
`
const NavBox = styled.article`
  position: fixed;
  top: 7vh;
  left: 7vw;
  font-size: 3vw;
  font-weight: 100;
`

function Home() {
  const [isPage, setIsPage] = useState<number>(1);
  const [isProjectSection, setIsProjectSection] = useState<number>(1);
  return (
    <Container>
      <NavBox><Nav isPage={isPage} setIsPage={setIsPage} isProjectSection={isProjectSection} setIsProjectSection={setIsProjectSection} /></NavBox>
      <SkillContainer />
      <ProjectContainer isProjectSection={isProjectSection} />
      <ContactContainer isProjectSection={isProjectSection} />
    </Container>
  );
}
export default Home;

// "homepage": "https://poiuy4004.github.io/portfolio2/"