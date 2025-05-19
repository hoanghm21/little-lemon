// filepath: c:/Users/ADMIN/little-lemon/src/components/About.tsx
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 50px 20px;
  background-color: #EDEFEE; /* Updated background color */
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: left;
`;

const TextContainer = styled.div`
  max-width: 600px;
  margin-right: 20px;
`;

const Title = styled.h1`
  font-family: 'Markazi Text', serif;
  font-size: 48px;
  color: #F4CE14; /* Yellow color */
  margin: 0;
`;

const Subtitle = styled.h2`
  font-family: 'Markazi Text', serif;
  font-size: 36px;
  color: #495E57; /* Greenish color */
  margin: 10px 0;
  font-weight: 400;
`;

const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #333;
  margin: 20px 0 0;
  line-height: 1.5;
`;

const ImagesContainer = styled.div`
  position: relative;
  width: 450px;
  max-width: 90vw;
  height: 350px;
  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;

const ImageA = styled.img`
  width: 88%;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
  position: absolute;
  top: 70px;
  left: -240px;

  @media (max-width: 768px) {
    width: 80%;
    left: 0;
    top: 0;
    max-width: 300px;
  }
`;

const ImageB = styled.img`
  width: 88%;
  max-width: 400px;
  height: auto;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 135px;
  z-index: 1;

  @media (max-width: 768px) {
    width: 80%;
    left: 20%;
    top: 20%;
    max-width: 300px;
  }
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <TextContainer>
        <Title>Little Lemon</Title>
        <Subtitle>Chicago</Subtitle>
        <Description>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          <br />
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
        </Description>
      </TextContainer>
      <ImagesContainer>
        <ImageA src="Mario and Adrian A.jpg" alt="Mario and Adrian A" />
        <ImageB src="Mario and Adrian b.jpg" alt="Mario and Adrian B" />
      </ImagesContainer>
    </AboutContainer>
  );
};

export default About;