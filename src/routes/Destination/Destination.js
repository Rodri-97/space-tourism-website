import {
  StyledDestination,
  ImageContainer,
  InfoContainer,
} from './Destination.styles';
import data from '../../data.json';
import { useState } from 'react';

const Destination = () => {
  const [selectedDestination, setSelectedDestination] = useState(
    data.destinations[0]
  );

  const destinationsList = data.destinations.map((destination) => {
    return (
      <li
        className='destination'
        onClick={() => setSelectedDestination(destination)}
        key={destination.name}
      >
        {destination.name}
      </li>
    );
  });

  return (
    <StyledDestination>
      <ImageContainer className='image-container'>
        <h4 className='title'>
          <span>01</span> PICK YOUR DESTINATION
        </h4>

        <img
          src={`${selectedDestination.images.png}`}
          alt={selectedDestination.name}
        />
      </ImageContainer>
      <InfoContainer className='info-container'>
        <ul className='destinations-list'>{destinationsList}</ul>

        <section className='main-info'>
          <h1 className='selected-destination'>{selectedDestination.name}</h1>
          <p className='description'>{selectedDestination.description}</p>
        </section>

        <section className='stats'>
          <div className='average-distance'>
            <span>AVG DISTANCE</span>
            <span>{selectedDestination.distance}</span>
          </div>
          <div className='estimated-travel-time'>
            <span>EST TRAVEL TIME</span>
            <span>{selectedDestination.travel}</span>
          </div>
        </section>
      </InfoContainer>
    </StyledDestination>
  );
};

export default Destination;
