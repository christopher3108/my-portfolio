import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand } from './styles';
import home from 'assets/illustrations/home.svg';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      
      <img src={home} alt="I’m Christopher and I’m a Backend & Devops engineer!" />
      
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
