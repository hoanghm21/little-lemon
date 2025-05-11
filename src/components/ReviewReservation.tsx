import React from 'react';
import styled from 'styled-components';
import { Container } from './SharedStyles';
import NavigationButton from './NavigationButton';

interface ReviewReservationProps {
  formData: {
    name: string;
    mobile: string;
    email: string;
    date: string;
    time: string;
    guests: number;
    occasion: string;
    table: string;
  };
  goToPreviousStep: () => void;
  confirmReservation: () => void;
}

// Styled components for ReviewReservation
const Title = styled.h2`
  font-family: 'Markazi Text', serif;
  font-size: 36px;
  color: #495E57; /* Title font color */
  margin-bottom: 20px;
  text-align: center;
`;

const Details = styled.div`
  font-family: 'Karla', sans-serif;
  font-size: 16px;
  color: #333;
  line-height: 1.6;
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add subtle shadow */
`;

const DetailRow = styled.p`
  margin: 10px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
`;

const ReviewReservation: React.FC<ReviewReservationProps> = ({
  formData,
  goToPreviousStep,
  confirmReservation,
}) => {
  return (
    <Container>
      <Title>Review Your Reservation</Title>
      <Details>
        <DetailRow><strong>Name:</strong> {formData.name}</DetailRow>
        <DetailRow><strong>Mobile:</strong> {formData.mobile}</DetailRow>
        <DetailRow><strong>Email:</strong> {formData.email}</DetailRow>
        <DetailRow><strong>Date:</strong> {formData.date}</DetailRow>
        <DetailRow><strong>Time:</strong> {formData.time}</DetailRow>
        <DetailRow><strong>Guests:</strong> {formData.guests}</DetailRow>
        <DetailRow><strong>Occasion:</strong> {formData.occasion}</DetailRow>
        <DetailRow><strong>Table:</strong> {formData.table}</DetailRow>
      </Details>
      <ButtonContainer>
        <NavigationButton label="Back" onClick={goToPreviousStep} variant="back" />
        <NavigationButton label="Confirm Reservation" onClick={confirmReservation} variant="next" />
      </ButtonContainer>
    </Container>
  );
};

export default ReviewReservation;