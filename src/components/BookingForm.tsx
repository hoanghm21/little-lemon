import React, { useEffect } from 'react';
import styled from 'styled-components';
import NavigationButton from './NavigationButton';
import { Container } from './SharedStyles';

// Styled components for the form
const Title = styled.h1`
  font-family: 'Markazi Text', serif;
  font-size: 36px;
  color: #495E57; /* Title font color */
  margin-bottom: 20px; /* Add spacing below the title */
  text-align: left; /* Align title to the left */
  width: 100%; /* Ensure title spans the full width */
`;

const Form = styled.form`
  display: grid;
  width: 90%; /* Increased width to 90% */
  gap: 30px; /* Add spacing between rows */
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between; /* Distribute inputs evenly */
  gap: 30px; /* Ensure consistent spacing between inputs */
  margin-left: 10px; /* Optional: Add left margin */
  margin-right: 10px; /* Optional: Add right margin */
`;

const InputWrapper = styled.div<{ $flexGrow: number }>`
  flex-grow: ${(props) => props.$flexGrow}; /* Set the ratio for each input */
`;

const Label = styled.label`
  font-family: 'Karla', sans-serif;
  font-size: 16px;
  color: #333;
  text-align: left;
  margin-bottom: 5px; /* Add spacing between label and input */
  display: block; /* Ensure label spans the full width */

  /* Add a red asterisk for required fields */
  &::after {
    content: '*';
    color: red;
    margin-left: 5px; /* Add spacing between the label text and the asterisk */
  }
`;

const Input = styled.input`
  font-family: 'Karla', sans-serif;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%; /* Ensure inputs span the full width of their container */
  box-sizing: border-box; /* Include padding and border in the element's total width */
`;

const Select = styled.select`
  font-family: 'Karla', sans-serif;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%; /* Ensure selects span the full width */
  box-sizing: border-box; /* Include padding and border in the element's total width */
`;

const TooltipContainer = styled.div`
  position: relative;
  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`;

const TooltipText = styled.span`
  visibility: hidden;
  width: 200px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%; /* Position above the input */
  left: 50%;
  margin-left: -100px; /* Center the tooltip */
  opacity: 0;
  transition: opacity 0.3s;

  /* Arrow for the tooltip */
  &::after {
    content: '';
    position: absolute;
    top: 100%; /* Position below the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

// Define props for BookingForm
interface BookingFormProps {
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
  updateFormData: (newData: Partial<BookingFormProps['formData']>) => void;
  goToNextStep: () => void;
  goToPreviousStep: () => void;
  availableTimes: string[];
  onDateChange: (date: string) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({
  formData,
  updateFormData,
  goToNextStep,
  goToPreviousStep,
  availableTimes,
  onDateChange,
}) => {
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }
    if (!formData.date.trim()) {
      newErrors.date = 'Date is required.';
    }
    if (!formData.time.trim()) {
      newErrors.time = 'Time is required.';
    }
    if (formData.guests < 1 || formData.guests > 10) {
      newErrors.guests = 'Guests must be between 1 and 10.';
    }
    if (!formData.occasion.trim()) {
      newErrors.occasion = 'Occasion is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleNextStep = () => {
    if (validateForm()) {
      goToNextStep(); // Proceed to the next step if the form is valid
    }
  };

  React.useEffect(() => {
    if (!formData.time && availableTimes.length > 0) {
      updateFormData({ time: availableTimes[0] }); // Set the first available time as default
    }
  }, [availableTimes, formData.time, updateFormData]);

  return (
    <Container>
      <Title>Book your table!</Title>
      <Form>
        {/* First Row: Name and Occasion */}
        <Row>
          <InputWrapper $flexGrow={2}>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              placeholder="Please write your name here"
              value={formData.name}
              onChange={(e) => updateFormData({ name: e.target.value })}
              aria-required="true"
            />
            {errors.name && <ErrorText>{errors.name}</ErrorText>}
          </InputWrapper>
          <InputWrapper $flexGrow={1}>
            <Label htmlFor="occasion">Occasion</Label>
            <Select
              id="occasion"
              value={formData.occasion}
              onChange={(e) => updateFormData({ occasion: e.target.value })}
              aria-required="true"
            >
              <option value="">Select an occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </Select>
            {errors.occasion && <ErrorText>{errors.occasion}</ErrorText>}
          </InputWrapper>
        </Row>

        {/* Second Row: Date, Time, and Guests */}
        <Row>
          <InputWrapper $flexGrow={1}>
            <Label htmlFor="res-date">Choose date</Label>
            <Input
              type="date"
              id="res-date"
              value={formData.date ? formData.date.split('/').reverse().join('-') : ''}
              onChange={(e) => {
                const [year, month, day] = e.target.value.split('-');
                const formattedDate = `${day}/${month}/${year}`;
                updateFormData({ date: formattedDate });
                onDateChange(formattedDate);
              }}
              aria-required="true"
            />
            {errors.date && <ErrorText>{errors.date}</ErrorText>}
          </InputWrapper>
          <InputWrapper $flexGrow={1}>
            <Label htmlFor="res-time">Choose time</Label>
            <Select
              id="res-time"
              value={formData.time || ''}
              onChange={(e) => updateFormData({ time: e.target.value })}
              aria-required="true"
            >
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </Select>
            {errors.time && <ErrorText>{errors.time}</ErrorText>}
          </InputWrapper>
          <InputWrapper $flexGrow={1}>
            <Label htmlFor="guests">No. of Guests</Label>
            <Input
              type="number"
              id="guests"
              placeholder="1"
              min="1"
              max="10"
              value={formData.guests}
              onChange={(e) => updateFormData({ guests: Number(e.target.value) })}
              aria-required="true"
            />
            {errors.guests && <ErrorText>{errors.guests}</ErrorText>}
          </InputWrapper>
        </Row>

        {/* Third Row: Mobile and Email */}
        <Row>
          <InputWrapper $flexGrow={1}>
            <Label htmlFor="mobile">Mobile Number</Label>
            <Input
              type="tel"
              id="mobile"
              placeholder="Enter your mobile number"
              value={formData.mobile}
              onChange={(e) => updateFormData({ mobile: e.target.value })}
              aria-required="true"
            />
            {errors.mobile && <ErrorText>{errors.mobile}</ErrorText>}
          </InputWrapper>
          <InputWrapper $flexGrow={1}>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => updateFormData({ email: e.target.value })}
              aria-required="true"
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
          </InputWrapper>
        </Row>

        <ButtonContainer>
          <NavigationButton
            label="Reset"
            onClick={goToPreviousStep}
            variant="back"
          />
          <NavigationButton
            label="Next"
            onClick={handleNextStep} // Use the validation handler
            variant="next"
          />
        </ButtonContainer>
      </Form>
    </Container>
  );
};

// Styled component for error messages
const ErrorText = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  display: block;
`;

export default BookingForm;