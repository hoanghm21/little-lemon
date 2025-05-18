import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BookingForm from '../components/BookingForm';
import SelectSeats from '../components/SelectSeats';
import ReviewReservation from '../components/ReviewReservation';
import styled from 'styled-components';
import { submitAPI } from '../utils/api';
import { updateAvailableTimes } from '../utils/bookingUtils';

// Styled components for the steps
const StepsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
`;

const Step = styled.div<{ $active: boolean; $completed: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.$active ? '#F4CE14' : props.$completed ? '#EDEFEE' : '#ccc'};
  color: ${(props) => (props.$active || props.$completed ? '#000' : '#666')};
  font-family: 'Karla', sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin: 0 10px;
  cursor: ${(props) => (props.$completed ? 'pointer' : 'not-allowed')};
  pointer-events: ${(props) => (props.$completed ? 'auto' : 'none')};
`;

const Arrow = styled.div`
  font-size: 24px;
  color: #666;
  margin: 0 10px;
`;

const TabContainer = styled.div`
  padding: 18px 20px 20px; /* Set padding-top to 18px */
  text-align: center;
`;

// Add a styled container for the congratulation tab
const CongratulationContainer = styled.div`
  background-color: #EDEFEE; /* Light background color */
  border-radius: 8px;
  padding: 50px 20px; /* Add 50px padding on top and bottom, 20px on left and right */
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ThankYouText = styled.p`
  font-family: 'Dancing Script', cursive; /* Handwriting font */
  font-size: 24px;
  color: #555; /* Subtle color */
  margin-top: 20px;
`;

const Booking: React.FC = () => {
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    date: '',
    time: '17:00PM',
    guests: 1,
    occasion: '',
    table: '',
  });
  const [reservationConfirmed, setReservationConfirmed] = useState(false);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    formData.date = today;

    // Set the available times into the state
    const times = updateAvailableTimes(today);
    setAvailableTimes(times);
  }, []);

  const handleDateChange = (date: string) => {
    // Set the available times into the state
    const times = updateAvailableTimes(date);
    setAvailableTimes(times);

    setFormData((prevData) => ({ ...prevData, date }));
  };

  const handleTabChange = (tabIndex: number) => {
    if (tabIndex <= activeTab) {
      setActiveTab(tabIndex);
    }
  };

  const updateFormData = (newData: Partial<typeof formData>) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  const goToNextStep = () => {
    if (activeTab < 2) {
      setActiveTab(activeTab + 1);
    }
  };

  const goToPreviousStep = () => {
    if (activeTab === 0) {
      setFormData({
        name: '',
        mobile: '',
        email: '',
        date: '',
        time: '17:00PM',
        guests: 1,
        occasion: '',
        table: '',
      });
    } else {
      setActiveTab(activeTab - 1);
    }
  };

  const confirmReservation = () => {
    const success = submitAPI(formData);
    if (success) {
      setReservationConfirmed(true);
      setActiveTab(3);
    } else {
      alert('Failed to confirm reservation.');
    }
  };

  return (
    <>
      <Head>
        <title>Little Lemon - Reservations</title>
        <link rel="icon" href="/lemon_icon.svg" type="image/svg+xml" />
      </Head>
      <Header aria-label="Site header" />
      <div style={{ padding: '20px', textAlign: 'center', position: 'relative' }}>
        <StepsContainer aria-label="Booking steps navigation">
          <Step
            $active={activeTab === 0}
            $completed={activeTab >= 0}
            onClick={() => handleTabChange(0)}
            aria-label="Step 1: Fill out booking form"
          >
            1
          </Step>
          <Arrow aria-hidden="true">→</Arrow>
          <Step
            $active={activeTab === 1}
            $completed={activeTab >= 1}
            onClick={() => handleTabChange(1)}
            aria-label="Step 2: Select seats"
          >
            2
          </Step>
          <Arrow aria-hidden="true">→</Arrow>
          <Step
            $active={activeTab === 2}
            $completed={activeTab >= 2}
            onClick={() => handleTabChange(2)}
            aria-label="Step 3: Review reservation"
          >
            3
          </Step>
          {reservationConfirmed && (
            <>
              <Arrow aria-hidden="true">→</Arrow>
              <Step
                $active={activeTab === 3}
                $completed={true}
                style={{ pointerEvents: 'none' }}
                aria-label="Step 4: Reservation confirmed"
              >
                ✓
              </Step>
            </>
          )}
        </StepsContainer>

        <TabContainer aria-label="Booking form content">
          {activeTab === 0 && (
            <BookingForm
              formData={formData}
              updateFormData={updateFormData}
              goToNextStep={goToNextStep}
              goToPreviousStep={goToPreviousStep}
              availableTimes={availableTimes}
              onDateChange={handleDateChange}
              aria-label="Booking form"
            />
          )}
          {activeTab === 1 && (
            <SelectSeats
              goToNextStep={goToNextStep}
              goToPreviousStep={goToPreviousStep}
              updateFormData={updateFormData}
              formData={formData}
              aria-label="Select seats"
            />
          )}
          {activeTab === 2 && (
            <ReviewReservation
              formData={formData}
              goToPreviousStep={goToPreviousStep}
              confirmReservation={confirmReservation}
              aria-label="Review reservation"
            />
          )}
          {activeTab === 3 && reservationConfirmed && (
            <CongratulationContainer aria-label="Reservation confirmation">
              <h1 style={{ color: '#F4CE14', fontSize: '24px' }}>🎉 Congratulations! 🎉</h1>
              <p style={{ fontSize: '18px', color: '#000' }}>
                Your reservation has been successfully confirmed.
              </p>
              <div style={{ fontSize: '48px', color: '#F4CE14', fontWeight: 'bold' }}>✓</div>
              <ThankYouText>Thank you for your patronage</ThankYouText>
            </CongratulationContainer>
          )}
        </TabContainer>
      </div>
      <Footer aria-label="Site footer" />
    </>
  );
};

export default Booking;