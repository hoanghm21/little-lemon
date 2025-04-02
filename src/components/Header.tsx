import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #f8f9fa;
  padding: 10px 20px; /* Adjusted padding */
  display: flex;
  align-items: center;
  justify-content: space-evenly; /* Adjusted justify-content */
`;

const Logo = styled.img`
  height: 30px; /* Adjusted height */
`;

const Nav = styled.nav`
  margin-top: 0;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 15px; /* Adjusted gap */
  margin: 0;
`;

const Li = styled.li`
  margin: 0;
`;

const StyledLink = styled.a`
  font-family: 'Karla', sans-serif;
  font-size: 18px;
  color: #000000;
  text-decoration: none;
  padding: 5px 10px; /* Added padding for better hover effect */
  border-radius: 5px; /* Added border-radius for rounded corners */

  &:hover {
    background-color: #495E57;
    color: #f4ce14;
    text-decoration: none; /* Ensure no underline on hover */
    border-radius: 15px/* Ensure border-radius on hover */
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src="/assets/Logo.svg" alt="Little Lemon Logo" />
      <Nav>
        <Ul>
          <Li><StyledLink href="/">Home</StyledLink></Li>
          <Li><StyledLink href="/about">About</StyledLink></Li>
          <Li><StyledLink href="/menu">Menu</StyledLink></Li>
          <Li><StyledLink href="/reservations">Reservations</StyledLink></Li>
          <Li><StyledLink href="/order">Order Online</StyledLink></Li>
          <Li><StyledLink href="/login">Login</StyledLink></Li>
        </Ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;