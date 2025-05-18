import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

const HeaderContainer = styled.header`
  background-color: #f8f9fa;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Logo = styled.img`
  height: 30px;
`;

const Nav = styled.nav`
  margin-top: 0;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 15px;
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
      <Logo src="/little-lemon/assets/Logo.svg" alt="Little Lemon Logo" />
      <Nav>
        <Ul>
          <Li>
            <Link href="/" passHref>
              <StyledLink className={router.pathname === '/' ? 'active' : ''}>
                Home
              </StyledLink>
            </Link>
          </Li>
          <Li>
            <Link href="/about" passHref>
              <StyledLink className={router.pathname === '/about' ? 'active' : ''}>
                About
              </StyledLink>
            </Link>
          </Li>
          <Li>
            <Link href="/menu" passHref>
              <StyledLink className={router.pathname === '/menu' ? 'active' : ''}>
                Menu
              </StyledLink>
            </Link>
          </Li>
          <Li>
            <Link href="/booking" passHref>
              <StyledLink className={router.pathname === '/booking' ? 'active' : ''}>
                Reservations
              </StyledLink>
            </Link>
          </Li>
          <Li>
            <Link href="/order" passHref>
              <StyledLink className={router.pathname === '/order' ? 'active' : ''}>
                Order Online
              </StyledLink>
            </Link>
          </Li>
          <Li>
            <Link href="/login" passHref>
              <StyledLink className={router.pathname === '/login' ? 'active' : ''}>
                Login
              </StyledLink>
            </Link>
          </Li>
        </Ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;