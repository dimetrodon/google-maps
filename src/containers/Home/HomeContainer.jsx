import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 2rem;
`;

const Card = styled.div`
  background: #fff;
  padding: 0 30px 0 20px;
  width: auto;
  min-height: 480px;
  height: 480px;
  overflow: auto;
  box-shadow: rgba(0, 0, 0, 0.22) 0px 1px 3px;
`;

const Title = styled.h1`
  margin-top: 0;
  font-size: 2em;
  padding: 3rem;
  text-align: center;
`;

const StyledLink = styled(Link)`
  display: block;
  text-align: center;
`;
 
const HomeContainer = () => (
  <Wrapper>
    <Card>
      <Title>
        Greetings! This is a Home Page
      </Title>
      <StyledLink to="/map">Go to map view</StyledLink>
    </Card>
  </Wrapper>
)
 
export default HomeContainer;
