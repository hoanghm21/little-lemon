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

const StyledLink = styled(Link)<{ $active?: boolean }>`
  font-family: 'Karla', sans-serif;
  font-size: 18px;
  color: ${({ $active }) => ($active ? '#f4ce14' : '#000000')};
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};
  border-bottom: ${({ $active }) => ($active ? '2px solid #f4ce14' : 'none')};

  &:hover,
  &:focus,
  &:active,
  &:visited {
    text-decoration: none;
    outline: none;
  }

  &:hover {
    background-color: #495E57;
    color: #f4ce14;
  }
`;

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/menu', label: 'Menu' },
  { href: '/booking', label: 'Reservations' },
  { href: '/order', label: 'Order Online' },
  { href: '/login', label: 'Login' },
];

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <HeaderContainer>
      <Logo src="/assets/Logo.svg" alt="Little Lemon Logo" />
      <Nav>
        <Ul>
          {navLinks.map(({ href, label }) => (
            <Li key={href}>
              <StyledLink
                href={href}
                $active={router.pathname === href}
              >
                {label}
              </StyledLink>
            </Li>
          ))}
        </Ul>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;