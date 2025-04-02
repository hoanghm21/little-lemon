import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialsContainer = styled.section`
  background-color: #FDF4EE;
  padding: 50px 20px;
  position: relative; /* Added to position the lemon image absolutely */
  overflow: hidden; /* Ensure the lemon image doesn't overflow the container */
`;

const LemonImage = styled.img`
  position: absolute;
  left: 15%;
  top: 50%;
  transform: translateY(-50%);
  width: 400px; /* Adjust the width as needed */
  height: auto;
  opacity: 0.1; /* Make the lemon image blend into the background */
`;

const TestimonialsContent = styled.div`
  flex: 1;
  text-align: center;
  z-index: 1; /* Ensure the content is above the lemon image */
`;

const Title = styled.h2`
  font-family: 'Markazi Text', serif;
  font-size: 36px;
  color: #333333;
  margin-bottom: 20px;
`;

const TestimonialCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  min-height: 300px;
  margin: 10px;
  padding: 20px;
  text-align: left;
`;

const StarIcon = styled.img`
  width: 20px; /* Adjust the width as needed */
  height: auto;
  margin-bottom: 10px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const UserAvatar = styled.img`
  width: 90px; /* Adjust the width as needed */
  height: 90px; /* Adjust the height as needed */
  border-radius: 50%;
  margin-right: 10px;
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const UserSocial = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #666;
`;

const ReviewText = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #666;
`;

const Arrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  color: #333; /* Updated color */
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
`;

const PrevArrow = styled(Arrow)`
  left: 10px;
`;

const NextArrow = styled(Arrow)`
  right: 10px;
`;

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow>{'<'}</PrevArrow>,
    nextArrow: <NextArrow>{'>'}</NextArrow>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <TestimonialsContainer>
      <LemonImage src="/assets/lemon.svg" alt="Lemon" />
      <TestimonialsContent>
        <Title>What our customers say!</Title>
        <Slider {...settings}>
          <TestimonialCard>
            <StarIcon src="/assets/icon_star.png" alt="Star" />
            <UserInfo>
              <UserAvatar src="/assets/anika.png" alt="Anika J" />
              <UserDetails>
                <UserName>Anika J</UserName>
                <UserSocial>@anika__J</UserSocial>
              </UserDetails>
            </UserInfo>
            <ReviewText>
              "A hidden gem for anyone craving authentic Mediterranean vibes. Every bite was bursting with flavor, and the atmosphere made our evening unforgettable."
            </ReviewText>
          </TestimonialCard>
          <TestimonialCard>
            <StarIcon src="/assets/icon_star.png" alt="Star" />
            <UserInfo>
              <UserAvatar src="/assets/judywealth.png" alt="Judy Ejike Korodele" />
              <UserDetails>
                <UserName>Judy Ejike Korodele</UserName>
                <UserSocial>@judywealth</UserSocial>
              </UserDetails>
            </UserInfo>
            <ReviewText>
              "The perfect spot for a relaxed dinner with friends—everything from the vibrant Greek salad to the warm, flavorful dishes hit just the right note. Can’t wait to come back!"
            </ReviewText>
          </TestimonialCard>
          <TestimonialCard>
            <StarIcon src="/assets/icon_star.png" alt="Star" />
            <UserInfo>
              <UserAvatar src="/assets/brutusK.png" alt="Brutus K" />
              <UserDetails>
                <UserName>Brutus K</UserName>
                <UserSocial>@brutusK</UserSocial>
              </UserDetails>
            </UserInfo>
            <ReviewText>
              "A cozy dinner that felt like home, with every dish bringing something unique to the table. We left with full bellies and happy hearts, especially after that refreshing lemon dessert!"
            </ReviewText>
          </TestimonialCard>
          <TestimonialCard>
            <StarIcon src="/assets/icon_star.png" alt="Star" />
            <UserInfo>
              <UserAvatar src="/assets/sara72.png" alt="Sara Lopez" />
              <UserDetails>
                <UserName>Sara Lopez</UserName>
                <UserSocial>@sara72</UserSocial>
              </UserDetails>
            </UserInfo>
            <ReviewText>
              "Celebrated a birthday here, and it was absolutely perfect! The fresh Mediterranean flavors had us coming back for more, and the lemon dessert was the sweetest touch to end the night."
            </ReviewText>
          </TestimonialCard>
        </Slider>
      </TestimonialsContent>
    </TestimonialsContainer>
  );
};

export default Testimonials;