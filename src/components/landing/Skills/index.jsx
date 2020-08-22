import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import pp from 'assets/illustrations/circle-cropped.png';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <br></br>
          <img src={pp} alt="I’m Christopher and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>Hello there, my name is Christopher Alexander! 
            <br></br><br></br>
            I am a Senior
            at&nbsp;
            <a
              href="https://www.washington.edu/"
              target="_blank"
              rel="noopener noreferrer"
            ><font color = "#6c63ff">
              <b>University of Washington</b>
            </font></a>
            &nbsp;majoring in Electrical and Computer Engineering. I will be graduating and get my degree in June 2021!<br></br>
            <br></br>I am more than open and excited to learn new things even if
            it is outside my fields and capabilities. In my spare time, I
            usually fiddle across YouTube videos and google to learn various
            things such as stocks, financial planning, and market possibility.
            <br></br><br></br>
            I am very passionate
            about almost everything &#128517; so feel free to contact me for
            more inquiries or just a small talk over a coffee! &nbsp;
          </p>
          <Button as={AnchorLink} href="#contact">
            Contact me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
