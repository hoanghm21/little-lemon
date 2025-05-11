import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/Hero';
import Highlights from '../components/Highlights';
import Testimonials from '../components/Testimonials';
import About from '../components/About';

const Home: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Little Lemon Restaurant</title>
                <link rel="icon" href="/assets/lemon_icon.svg" type="image/svg+xml" />
            </Head>
            <Header />
            <HeroSection />
            <main aria-label="Main content">
                <Highlights />
                <Testimonials />
                <About />
            </main>
            <Footer />
        </div>
    );
};

export default Home;