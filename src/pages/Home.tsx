import { useState } from "react";
import styled from "styled-components";

import Header from "../components/layouts/Header";
import Nav from "../components/layouts/Nav";
import IntroContainer from "../containers/IntroContainer";
import SkillContainer from "../containers/SkillContainer";
import ProjectContainer from "../containers/ProjectContainer";
import ContactContainer from "../containers/ContactContainer";

const Container = styled.main`
  padding: 0 22vw;
  display: flex;
  flex-direction: column;
  row-gap: 6vw;
  @media (max-width: 1024px) {
    padding: 0 1vw;
  }
`
const NavBox = styled.article`
  z-index: 9999;
  position: fixed;
  top: 7vh;
  left: 7vw;
  font-size: 3vw;
  font-weight: 100;
  @media (max-width: 1024px) {
    display: none;
  }
`

function Home() {
  const [isPage, setIsPage] = useState<number>(1);

  return (
    <Container>
      <Header isPage={isPage} setIsPage={setIsPage} />
      <NavBox><Nav isPage={isPage} setIsPage={setIsPage} /></NavBox>
      <IntroContainer isPage={isPage} setIsPage={setIsPage} />
      <SkillContainer isPage={isPage} setIsPage={setIsPage} />
      <ProjectContainer isPage={isPage} setIsPage={setIsPage} />
      <ContactContainer isPage={isPage} setIsPage={setIsPage} />
    </Container>
  );
}
export default Home;