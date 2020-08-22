import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper, Grid, Item, Content, Stats } from './styles';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const {
    github: {
      viewer: {
        repositories: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
      {
        github {
          viewer {
            repositories(first: 8, orderBy: { field: STARGAZERS, direction: DESC }) {
              edges {
                node {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <Wrapper as={Container} id="projects">
      <h2>Out-of-Work Projects</h2>
      <Grid>
        {/* {edges.map(({ node }) => ( */}
          <Item key="slide-platform" as="a" href="https://github.com/christopher3108/Simple-64-bit-SlidePlatform-Game" target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme} className="projects">
              <Content>
                <h4>Simple 64-bit Slide Platform Game</h4>
                <p><b>Language & Tools: </b>Verilog, SystemVerilog <br></br><br></br>
                <b>Devices used </b>: ps/2 keyboard, LCD Monitor, VGA cable, and an Audio Speaker.</p>
                <p>Creating a simple slide platform game referred from the early "Mario" gameplay using SystemVerilog as the hardware implementation language.
                <br></br><br></br>
                </p>
              </Content>
              {/* <Stats theme={theme}>
                <div>
                  <Star color={theme === 'light' ? '#000' : '#fff'} />
                  {/* <span>{node.stargazers.totalCount}</span> */}
                {/* </div>
                <div> */}
                  {/* <Fork color={theme === 'light' ? '#000' : '#fff'} /> */}
                  {/* <span>{node.forkCount}</span> */}
                {/* </div>
              </Stats> */}
            </Card>
          </Item>
        {/* ))} */}
          <Item key="slide-platform" as="a" href="https://www.isauw.org/home/" target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme} className="projects">
              <Content>
                <h4 className="isauww">ISAUW Website <br></br></h4>
                <p><b>Language & Tools: </b>PHP, HTML, JavaScript <br></br><br></br>
                Developing and Maintaining the UI/UX of the organization's website containing information about the organization events, mission, and members.
                </p>
              </Content>
              </Card>
          </Item>

          <Item key="slide-platform" as="a" href="https://www.isauw.org/pay/customer/" target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme} className="projects">
              <Content>
                <h4 className="isauwp">ISAUW Pay</h4>
                <p><b>Language & Tools: </b>PHP, MySQL <br></br><br></br>
                Developing an online payment technology for organization event. This project includes developing and maintaining user database and unique QR Code to be scanned during transaction.</p>
              </Content>
              </Card>
          </Item>

          <Item key="slide-platform" as="a" href="https://easyeda.com/editor#id=ab9bc3be3fd246c8b51ff34f5aa03c3a|815d6710d64740d7be23ae165a4ac48c|451bd7777ae14d8f92681083ed071b3f" target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme} className="projects">
              <Content>
                <h4 className="uwhps">Devices and Relay Protection</h4>
                <p><b>Language & Tools: </b>Circuit Protection, CAD<br></br><br></br>
                Design a protection relay to protect electronic devices from various technical problems such as short and reverse polarity protection, underwater pressure, etc.</p>
              </Content>
              </Card>
          </Item>

          <Item key="slide-platform" as="a" href="https://github.com/christopher3108" target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme} className="projects">
              <Content>
                <h4 className="sudoku">Sudoku Board Solver</h4>
                <p><b>Language & Tools: </b>Java <br></br><br></br>
                Developing a brute force sudoku solver using both recursive and iteration solutions with a maximum capacity of 9x9 board.</p>
              </Content>
              </Card>
          </Item>
      </Grid>
    </Wrapper>
  );
};
