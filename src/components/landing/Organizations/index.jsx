import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card } from 'components/common';
import hps from 'assets/illustrations/uwhps.png';
import isc from 'assets/illustrations/isc.png';
import isauw from'assets/illustrations/isauw.png';
import coesac from 'assets/illustrations/coesac.png';
import mlh from 'assets/illustrations/mlh.png';
import dubhacks from 'assets/illustrations/dubhacks.png';
import { Wrapper, Grid, Item, Content, Stats } from './styles';

export const Organizations = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <Wrapper as={Container} id="organizations">
      <h2>Organizations and Affiliations</h2>
      <Grid>
          <Item key="slide-platform" as="a" href="https://www.uwhpsub.com/home" target="_blank" rel="noopener noreferrer" theme={theme}>
              <Content>
                <img src={hps}/>
              </Content>
          </Item>
          <Item key="slide-platform" as="a" href="https://www.isauw.org/home/" target="_blank" rel="noopener noreferrer" theme={theme}>
              <Content>
                <img src={isauw}/>
              </Content>
          </Item>
          <Item key="slide-platform" as="a" href="https://www.instagram.com/iscshoreline/?hl=en" target="_blank" rel="noopener noreferrer" theme={theme}>
              <Content>
                <img src={isc}/>
              </Content>
          </Item>
          <Item key="slide-platform" as="a" href="https://www.engr.washington.edu/mycoe/committees/sac" target="_blank" rel="noopener noreferrer" theme={theme}>
              <Content>
                <img src={coesac}/>
              </Content>
          </Item>
          <Item key="slide-platform" as="a" href="https://mlh.io/" target="_blank" rel="noopener noreferrer" theme={theme}>
              <Content>
                <img src={mlh}/>
              </Content>
          </Item>
          <Item key="slide-platform" as="a" href="https://dubhacks.co/" target="_blank" rel="noopener noreferrer" theme={theme}>
              <Content>
                <img src={dubhacks}/>
              </Content>
          </Item>
      </Grid>
    </Wrapper>
  );
};
