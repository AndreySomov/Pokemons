import * as React from 'react';

import Header from './Header/Header';
import Footer from './Footer';

import { Container } from './styles';


const Layout: React.FC = ({ children }) => (
  <Container>
    <Header />
    {children}
    <Footer />
  </Container>
);

export default Layout;
