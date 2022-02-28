import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import { cars } from '../carInfo';

const Home = () => {
  return (
    <Container>
      {cars.map((car, index) => (
        <Section
          key={index}
          title={car.title}
          description={car.description}
          backgroundImg={car.image}
          leftBtnText={car.leftText}
          rightBtnText={car.rightText}
        />
      ))}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
  z-index: 10;
`;
