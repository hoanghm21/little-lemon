import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightSection = styled.div`
  flex: 3;
  display: flex;
  justify-content: space-evenly;
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const NavTitle = styled.h3`
  font-family: 'Karla', sans-serif;
  font-size: 24px;
  color: #EE9972; /* Updated color */
  margin-bottom: 10px;
  font-weight: bold; /* Bold */
`;

const NavLink = styled(Link)`
  font-family: 'Karla', sans-serif;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  margin-bottom: 5px;

  &:hover {
    color: #FBDABB; /* Updated hover color */
  }
`;

const ContactsSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactsTitle = styled.h3`
  font-family: 'Karla', sans-serif;
  font-size: 24px;
  color: #EE9972; /* Updated color */
  margin-bottom: 10px;
  font-weight: bold; /* Bold */
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

const ContactIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const ContactText = styled.p`
  font-family: 'Karla', sans-serif; /* Updated font */
  font-size: 16px;
  color: #fff;
  margin: 0;
`;

const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const SocialTitle = styled.h3`
  font-family: 'Karla', sans-serif;
  font-size: 24px;
  color: #EE9972; /* Updated color */
  margin-bottom: 10px;
  font-weight: bold; /* Bold */
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialLink = styled.a`
  cursor: pointer;

  &:hover img {
    filter: brightness(0.8); /* Darken the icon on hover */
  }
`;

const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <LeftSection>
        <Logo src="lemon_logo.png" alt="Little Lemon Logo" />
      </LeftSection>
      <RightSection>
        <NavSection>
          <NavTitle>Doormat Navigation</NavTitle>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/menu">Menu</NavLink>
          <NavLink href="/booking">Reservations</NavLink>
          <NavLink href="/order-online">Order Online</NavLink>
          <NavLink href="/login">Login</NavLink>
        </NavSection>
        <ContactsSection>
          <ContactsTitle>Contacts</ContactsTitle>
          <ContactItem>
            <ContactIcon src="location_icon.png" alt="Location" />
            <ContactText>1699 Oak Avenue, Chicago, IL 60606</ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIcon src="phone.png" alt="Phone" />
            <ContactText>(312) 528-5097</ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIcon src="mail.png" alt="Email" />
            <ContactText>info@little_lemon.com</ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIcon src="Copyright Circle .png" alt="Copyright" />
            <ContactText>2025 by Little Lemon. All Rights Reserved.</ContactText>
          </ContactItem>
        </ContactsSection>
        <SocialSection>
          <SocialTitle>Connect with us</SocialTitle>
          <SocialIcons>
            <SocialLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <SocialIcon src="Facebook.png" alt="Facebook" />
            </SocialLink>
            <SocialLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <SocialIcon src="Instagram.png" alt="Instagram" />
            </SocialLink>
            <SocialLink href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <SocialIcon src="Twitter.png" alt="Twitter" />
            </SocialLink>
          </SocialIcons>
        </SocialSection>
      </RightSection>
    </FooterContainer>
  );
};

export default Footer;