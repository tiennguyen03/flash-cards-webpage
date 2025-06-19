import React, { useState } from 'react';

const Card = ({ question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flashcard" onClick={handleClick}>
      <div className={`flashcard-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="flashcard-front">
          <img src={question} alt="Country flag" className="flag-image" />
          <p>What country does this flag belong to?</p>
        </div>
        <div className="flashcard-back">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;