import React from 'react';
import Head from 'next/head';
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

const Title = styled.h1`
  font-family: 'Markazi Text', serif;
  font-size: 48px;
  color: #495E57;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-family: 'Karla', sans-serif;
  font-size: 18px;
  color: #666;
`;

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Little Lemon - Page Not Found</title>
        <link rel="icon" href="/assets/lemon_icon.svg" type="image/svg+xml" />
      </Head>
      <Header />
      <Container>
        <Title>404 - Page Not Found</Title>
        <Message>Sorry, the page you are looking for does not exist.</Message>
      </Container>
      <Footer />
    </>
  );
};

export default NotFoundPage;