import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.png';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return(
    <Wrapper as={Container} id="contact">
      <Details theme={theme}>
        <h1>Contact Me</h1>
        <ContactForm />
      </Details>
      <Thumbnail>
        <img src={contact}/>
      </Thumbnail>
    </Wrapper>
  );
};
