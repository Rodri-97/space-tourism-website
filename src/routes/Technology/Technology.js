import { StyledTechnology, StyledContent } from './Technology.styles';
import data from '../../data.json';
import { useState } from 'react';

const Technology = () => {
  const [currentTechnology, setCurrentTechnology] = useState(
    data.technology[0]
  );

  const sliders = data.technology.map((technology, idx) => {
    return (
      <li
        key={technology.name}
        onClick={() => setCurrentTechnology(technology)}
      >
        {idx + 1}
      </li>
    );
  });

  return (
    <StyledTechnology>
      <h4 className='page-title'>
        <span>02</span> MEET YOUR CREW
      </h4>

      <StyledContent>
        <img
          src={currentTechnology.images.landscape}
          alt={currentTechnology.name}
        />
        <ul>{sliders}</ul>

        <section className='text-content'>
          <h3>THE TERMINOLOGY</h3>
          <h2>{currentTechnology.name}</h2>
          <p>{currentTechnology.description}</p>
        </section>
      </StyledContent>
    </StyledTechnology>
  );
};

export default Technology;
