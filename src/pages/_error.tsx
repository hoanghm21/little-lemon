import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 120px); /* Adjust height to account for header and footer */
  text-align: center;
  background-color: #EDEFEE;
`;

const Message = styled.h2`
  font-family: 'Markazi Text', serif;
  font-size: 28px;
  color: #495E57;
  margin-top: 20px;
`;

const Image = styled.img`
  max-width: 400px;
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ErrorPage: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Image src="/assets/images.jpg" alt="Under Construction" />
        <Message>
          This page is under construction, dear. Please come back later.
        </Message>
      </Container>
      <Footer />
    </>
  );
};

export default ErrorPage;