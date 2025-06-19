import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';

// Import flag images
import brazilFlag from './images/brazil.jpg';
import canadaFlag from './images/canada.jpg';
import chinaFlag from './images/china.jpg';
import franceFlag from './images/france.jpg';
import germanyFlag from './images/germany.png';
import japanFlag from './images/japan.jpg';
import russiaFlag from './images/russia.png';
import ukFlag from './images/uk.jpg';

const cardData = [
  { 
    question: franceFlag,
    answer: "France"
  },
  { 
    question: brazilFlag,
    answer: "Brazil"
  },
  { 
    question: canadaFlag,
    answer: "Canada"
  },
  { 
    question: chinaFlag,
    answer: "China"
  },
  { 
    question: germanyFlag,
    answer: "Germany"
  },
  { 
    question: japanFlag,
    answer: "Japan"
  },
  { 
    question: russiaFlag,
    answer: "Russia"
  },
  { 
    question: ukFlag,
    answer: "United Kingdom"
  }
];

const App = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const getRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    setCurrentCardIndex(randomIndex);
  };

  return (
    <div className='main'>
      <h1>Guess The Country Flag</h1>
      <p className="description">Test your knowledge of country flags from around the world!</p>
      <p className="card-count">Total Cards: {cardData.length}</p>
      
      <Card 
        question={cardData[currentCardIndex].question}
        answer={cardData[currentCardIndex].answer}
      />

      <div className="btn-container">
        <button onClick={getRandomCard}>Next Card →</button>
      </div>
    </div>
  );
};

export default App;


