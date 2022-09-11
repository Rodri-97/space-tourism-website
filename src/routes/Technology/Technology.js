import { StyledTechnology, StyledContent } from './Technology.styles';
import data from '../../data.json';
import { useState } from 'react';
import useWindowDimensions from '../../helpers/useWindowDimension';
import { minimalDesktopWidth } from '../../helpers/styleData';

const Technology = () => {
  const [currentTechnology, setCurrentTechnology] = useState(
    data.technology[0]
  );

  const screenWidth = useWindowDimensions().width;

  const sliders = data.technology.map((technology, idx) => {
    return (
      <li
        key={technology.name}
        onClick={() => setCurrentTechnology(technology)}
        className='slider'
        style={
          currentTechnology === technology
            ? { backgroundColor: 'white', color: 'rgb(0, 0, 50)' }
            : null
        }
      >
        {idx + 1}
      </li>
    );
  });

  return (
    <StyledTechnology>
      <h4 className='page-title'>
        <span>03</span> SPACE LAUNCH 101
      </h4>

      <StyledContent>
        <article className='img-container'>
          <img
            src={
              screenWidth < minimalDesktopWidth
                ? currentTechnology.images.landscape
                : currentTechnology.images.portrait
            }
            alt={currentTechnology.name}
            className='technology-img'
          />
        </article>

        <ul className='sliders'>{sliders}</ul>

        <section className='text-content'>
          <h3 className='terminology'>THE TERMINOLOGY</h3>
          <h2 className='technology-name'>
            {currentTechnology.name.toUpperCase()}
          </h2>
          <p className='description'>{currentTechnology.description}</p>
        </section>
      </StyledContent>
    </StyledTechnology>
  );
};

export default Technology;
