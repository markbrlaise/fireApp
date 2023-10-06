import React from 'react';
import './App.css';
import NavBar from './components/Navigation';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import InfoCard from './components/InfoCard';
import Container from 'react-bootstrap/esm/Container';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Section1 />
      <Section2 />
      <Section3 />
      <h2>Our recent reportes</h2>
      <div className='Section4'>
        <Container className='Section4'>
          <InfoCard
            imageSrc="./S4-img-1.png"
            title="Jane Cooper"
            description="Location"
          />
          <InfoCard
            imageSrc="./S4-img-2.zip"
            title="Ronald Richards"
            description="Location"
          />
          <InfoCard
            imageSrc="image3.jpg"
            title="Brooklyn Simmons"
            description="Location"
          />
          <InfoCard
            imageSrc="image4.jpg"
            title="Kristin Watson"
            description="Location"
          />
        </Container>
      </div>
    </div>
  );
}

export default App;
