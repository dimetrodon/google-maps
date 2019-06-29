import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 70px;
  width: 100%;
  background: #5F5F5F;
  color: #FFF;
  text-align: center;
  display: flex;
  justify-content: space-around;
`;

const Title = styled.h3`
  margin: 0;
  padding: 1rem;
`;

const Nav = styled.div``;
const NavLink = styled(Link)`
  display: inline-block;
  color: #FFF;
  padding: 1rem;
`;

// TODO: This block should be moved to Global
const OPTIONS = [
  {id: 1, label: 'Home', url: '/'},
  {id: 2, label: 'Map', url: '/map'},
  {id: 3, label: 'Contact us', url: '/contact-us'},
  {id: 4, label: 'Terms', url: '/terms'},
]

const Header = () => (
  <Wrapper>
    <Title>
      Header
    </Title>
    <Nav>
      {OPTIONS.map( item => (
        <NavLink key={item.id} to={item.url}>{item.label}</NavLink>
      ))}
    </Nav>
  </Wrapper>
);

export default Header;
