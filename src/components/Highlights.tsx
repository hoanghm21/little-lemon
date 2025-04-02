import React from 'react';
import styled from 'styled-components';

const HighlightsContainer = styled.section`
  padding: 100px 20px 50px; /* Updated padding: 100px top, 50px bottom, 20px left and right */
  text-align: center;
  background-color: #f8f9fa;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly; /* Updated justify-content */
  align-items: center;
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 36px;
  color: #333;
  margin: 0;
`;

const Button = styled.button`
  background-color: #F4CE14;
  color: #000;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 400;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e0b800;
  }
`;

const DishesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const DishCard = styled.div`
  background-color: #EDEFEE; /* Updated background color */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 10px;
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const DishImage = styled.img`
  width: 100%;
  height: 200px; /* Fixed height for all images */
  object-fit: cover; /* Ensure the images are properly cropped */
  border-top-left-radius: 10px; /* Only top corners */
  border-top-right-radius: 10px; /* Only top corners */
`;

const DishContent = styled.div`
  padding: 20px;
  flex: 1; /* Allow DishContent to grow and fill the available space */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensure OrderContainer is at the bottom */
  background-color: #EDEFEE; /* Updated background color */
`;

const DishTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DishTitle = styled.h3`
  font-family: 'Markazi Text', serif; /* Updated font */
  font-size: 24px;
  color: #333;
  margin: 0;
`;

const DishPrice = styled.span`
  font-family: 'Karla', sans-serif;
  font-size: 20px;
  color: #EE9972;
`;

const DishDescription = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #495E57; /* Updated color */
  margin: 10px 0 0;
`;

const OrderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const OrderText = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #333333; /* Updated color */
  font-weight: bold; /* Added bold */
  margin-right: 5px; /* Adjust the margin as needed */
`;

const MotorbikeIcon = styled.img`
  width: 25px; /* Adjusted the width */
  height: 20px; /* Kept the height */
`;

const Highlights: React.FC = () => {
  return (
    <HighlightsContainer>
      <HeaderContainer>
        <Title>This week's specials!</Title>
        <Button>Online Menu</Button>
      </HeaderContainer>
      <DishesContainer>
        <DishCard>
          <DishImage src="/assets/greek salad.jpg" alt="Greek Salad" />
          <DishContent>
            <DishTitleContainer>
              <DishTitle>Greek Salad</DishTitle>
              <DishPrice>$12.99</DishPrice>
            </DishTitleContainer>
            <DishDescription>
              The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
            </DishDescription>
            <OrderContainer>
              <OrderText>Order a delivery</OrderText>
              <MotorbikeIcon src="/assets/bike-icon.png" alt="Motorbike" />
            </OrderContainer>
          </DishContent>
        </DishCard>
        <DishCard>
          <DishImage src="/assets/bruchetta.svg" alt="Bruchetta" />
          <DishContent>
            <DishTitleContainer>
              <DishTitle>Bruchetta</DishTitle>
              <DishPrice>$5.99</DishPrice>
            </DishTitleContainer>
            <DishDescription>
              Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
            </DishDescription>
            <OrderContainer>
              <OrderText>Order a delivery</OrderText>
              <MotorbikeIcon src="/assets/bike-icon.png" alt="Motorbike" />
            </OrderContainer>
          </DishContent>
        </DishCard>
        <DishCard>
          <DishImage src="/assets/lemon dessert.jpg" alt="Lemon Dessert" />
          <DishContent>
            <DishTitleContainer>
              <DishTitle>Lemon Dessert</DishTitle>
              <DishPrice>$5.00</DishPrice>
            </DishTitleContainer>
            <DishDescription>
              This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
            </DishDescription>
            <OrderContainer>
              <OrderText>Order a delivery</OrderText>
              <MotorbikeIcon src="/assets/bike-icon.png" alt="Motorbike" />
            </OrderContainer>
          </DishContent>
        </DishCard>
      </DishesContainer>
    </HighlightsContainer>
  );
};

export default Highlights;