import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import {Links} from './styles';
import social from './social.json';
import dev from 'assets/illustrations/dev2.png';
import resume from 'assets/illustrations/resume.pdf';
import blm from 'assets/illustrations/blm.png';

import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There,</h1>
          <h4>I’m Christopher Alexander!</h4>
          <h3>Software Engineer </h3>
          <h3>Web Developer </h3>
          <h3>Electrical & Computer Engineer</h3>
          <Links>
        {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </Links>
          <a href={resume} target="_blank">
            <Button>My Resume</Button>
          </a>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m Christopher and I’m a Software engineer!"/>
        </Thumbnail>
      </IntroWrapper>
      <img src={blm} className="center"/>
    </Wrapper>
  );
};
