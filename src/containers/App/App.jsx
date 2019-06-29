/* Packages */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

/* App imports */
import Router from './Router';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #F8F8F8;
  background: linear-gradient(#FFFFFF, #CCCCCC);
`;

const App = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
