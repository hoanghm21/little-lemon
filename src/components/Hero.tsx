import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  background-color: #495E57;
  padding: 90px 20px 80px; /* Added extra padding at the bottom */
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #EDEFEE;
  position: relative; /* Added to allow image overflow */
`;

const TextContainer = styled.div`
  text-align: left;
  max-width: 50%;
  padding-right: 100px; /* Added padding to the right */
`;

const HeroTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 48px;
  font-weight: 400; /* Reduced font weight */
  color: #F4CE14;
  margin: 0;
`;

const HeroSubtitle = styled.h2`
  font-family: 'Markazi Text', serif;
  font-size: 36px;
  font-weight: 400; /* Reduced font weight */
  color: #EDEFEE;
  margin: 10px 0;
`;

const HeroParagraph = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 400; /* Reduced font weight */
  color: #EDEFEE;
  margin: 20px 0;
`;

const ReserveButton = styled.button`
  background-color: #F4CE14;
  color: #000;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 400; /* Reduced font weight */
  padding: 10px 20px;
  border: none;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: #e0b800;
  }
`;

const Image = styled.img`
  max-width: 18%; /* Adjusted max-width to make the image smaller */
  height: auto;
  border-radius: 10px;
  position: absolute;
  bottom: -70px; /* Moved image up */
  right: 170px;
`;

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <TextContainer>
        <HeroTitle>Little Lemon</HeroTitle>
        <HeroSubtitle>Chicago</HeroSubtitle>
        <HeroParagraph>
          We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
        </HeroParagraph>
        <ReserveButton>Reserve a Table</ReserveButton>
      </TextContainer>
      <Image src="/assets/restaurantfood.jpg" alt="Restaurant Food" />
    </HeroContainer>
  );
};

export default HeroSection;