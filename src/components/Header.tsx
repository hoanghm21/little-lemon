import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

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
  padding: 5px 10px;
  border-radius: 5px;

  &:hover {
    background-color: #495E57;
    color: #f4ce14;
    text-decoration: none;
  }

  &.active {
    font-weight: bold;
    color: #f4ce14;
    border-bottom: 2px solid #f4ce14;
  }
`;

const Header: React.FC = () => {
  const router = useRouter();
  
  return (
    <HeaderContainer>
      <Logo src="/assets/Logo.svg" alt="Little Lemon Logo" />
      <Nav>
        <Ul>
          <Li>
            <StyledLink href="/" className={router.pathname === '/' ? 'active' : ''}>
              Home
            </StyledLink>
          </Li>
          <Li>
            <StyledLink href="/about" className={router.pathname === '/about' ? 'active' : ''}>
              About
            </StyledLink>
          </Li>
          <Li>
            <StyledLink href="/menu" className={router.pathname === '/menu' ? 'active' : ''}>
              Menu
            </StyledLink>
          </Li>
          <Li>
            <StyledLink href="/booking" className={router.pathname === '/booking' ? 'active' : ''}>
              Reservations
            </StyledLink>
          </Li>
          <Li>
            <StyledLink href="/order" className={router.pathname === '/order' ? 'active' : ''}>
              Order Online
            </StyledLink>
          </Li>
          <Li>
            <StyledLink href="/login" className={router.pathname === '/login' ? 'active' : ''}>
              Login
            </StyledLink>
          </Li>
        </Ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;