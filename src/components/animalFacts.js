import { animals } from './../js/animals';
import React from 'react';

const title = '';
const showBackground = true;
const background = (
  <img 
    className="background"
    alt="ocean"
    src="/images/ocean.jpg"
  />
);
const images = [];

for (const animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

function displayFact(e) {
  const animalName = e.target.alt;
  const facts = animals[animalName].facts;
  const randomIndex = Math.floor(Math.random() * facts.length);
  const funFact = facts[randomIndex];

  const factElement = document.getElementById('fact');
  factElement.innerHTML = funFact;
}

const animalFacts = (
  <div>
    <h1>{title || 'Click an animal for a fun fact'}</h1>
    {showBackground && background}
    <div className="animals">
      {images}     
    </div>
     <p id="fact"></p>
  </div>    
);


export default animalFacts;
