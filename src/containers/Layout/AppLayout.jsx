/* Packages */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* App imports */
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

const Wrapper = styled.div``;
const BodyWrapper = styled.div``;
const Content = styled.div``;

const AppLayout = ({
  children,
  footer,
  header,
  sidebar
}) => (
  <Wrapper>
    {header && <Header />}

    <BodyWrapper>
      {sidebar && <Sidebar />}
      <Content>{children}</Content>
    </BodyWrapper>

    {footer && <Footer />}
  </Wrapper>
);

AppLayout.propTypes = {
  footer: PropTypes.bool,
  header: PropTypes.bool,
  sidebar: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

AppLayout.defaultProps = {
  footer: false,
  header: true,
  sidebar: false
};

export default AppLayout;
