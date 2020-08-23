import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card } from 'components/common';
import map from 'assets/illustrations/MAP_Logo.png';
import digitech from 'assets/illustrations/digitech.png';
import shoreline from'assets/illustrations/shoreline.png';
import { Wrapper, Grid, Item, Content, Stats } from './styles';

export const Works = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <Wrapper as={Container} id="works">
      <h2>Work Experiences</h2>
      <Grid>
          <Item key="slide-platform" as="a" href="https://www.map.co.id/" target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content>
                <h4 className="map">Mitra Adiperkasa</h4>
                <img src={map}/>
                <p><b>Software Engineering Internship</b> <br></br><br></br>
                Works in the application service team to develop a web sales report for Sephora (for internal usage) by utilizing Java Spring boot as its core backend
                and AngularJS as the front end, adding online payment option 
                and adding MAP Voucher usage option in the MAP E-MALL Application with the help of API Development.</p>
              </Content>
            </Card>
          </Item>
          <Item key="slide-platform" as="a" href="http://digitechid.com/" target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content>
                <h4 className="digitech">Wenardy Digitech Indonesia<br></br></h4>
                <br></br>
                <img src={digitech}/>
                <br></br>
                <p><b>Web Developer Internship</b> <br></br><br></br>
                Learn how to utilize laravel, reactJS, and json file to rebuilt a website. Utilizing API Development to get and push various information from other 
                website / application and encrypt the OAuth token using dotEnv package in the website development. Learn how to develop and deploy an end-to-end website by utilizing webpack.
                </p>
              </Content>
              </Card>
          </Item>
          <Item key="slide-platform" as="a" href="https://www.shoreline.edu/math-learning-center/" target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content>
                <h4 className="tutor">Math Learning Center</h4>
                <img src={shoreline}/>
                <p><b>Upper-level Math Tutor (part-time)</b> <br></br><br></br>
                Provide a drop in tutoring for students in the Shoreline Community College in the Math Learning Center for approximately 9-12 hours a week. </p>
              </Content>
              </Card>
          </Item>
      </Grid>
    </Wrapper>
  );
};
