import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects, Works, Organizations } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Skills />
    <Projects />
    <Works />
    <Organizations />
    <Contact />
  </Layout>
);
