import React, { useState, useEffect } from 'react';
import bg from '../../assets/my-image.jpg';
import './intro.css'; // Import the CSS file

const Intro = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetters, setCurrentLetters] = useState([]);

  useEffect(() => {
    const words = ['Java', 'JavaScript', 'Node', 'Express', 'MongoDB', 'Sql', 'OOPs']; // Move 'words' inside useEffect
    const intervalId = setInterval(() => {
      const word = words[currentWordIndex];
      const nextLetter = word[currentLetters.length];

      if (nextLetter !== undefined) {
        setCurrentLetters((prevLetters) => [...prevLetters, nextLetter]);
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setCurrentLetters([]);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 1000); // Delay before moving to the next word
      }
    }, 200); // Adjust the interval duration (in milliseconds) for the typewriter effect

    return () => clearInterval(intervalId);
  }, [currentWordIndex, currentLetters]); // 'words' is not included in the dependency array

  return (
    <section id="intro">
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>
          I'm <span className='introName'>Vishal</span><br />
          I am into <span className='introWord'>{currentLetters.join('')}</span>
        </span>
        <p className='introPara'>
          I am Vishal Singh Rana currently pursuing MCA from Bharati Vidyapeeth's Institute of Computer Application and Management.<br />
          I aim to excel as a Software Developer, enthusiastic about learning and mastering the latest technologies.<br />
          My objective is to consistently enhance my skills and tackle a variety of projects to push my abilities and <br />
          develop as a successful developer.
        </p>
      </div>
      <img src={bg} alt="Profile" className='bg' />
    </section>
  );
}

export default Intro;
