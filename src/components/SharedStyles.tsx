import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #EDEFEE; /* Match Highlights background */
  padding: 0 40px 40px; /* Removed top padding */
  max-width: 80%; /* Limit the width of the container */
  margin: 0 auto; /* Center the container horizontally */
  border-radius: 10px; /* Optional: Add rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Add subtle shadow */
`;