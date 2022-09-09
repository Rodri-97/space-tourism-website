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
        className='destination-element'
        onClick={() => setSelectedDestination(destination)}
        key={destination.name}
        style={
          selectedDestination === destination
            ? { color: 'white', borderBottomColor: 'white' }
            : null
        }
      >
        {destination.name.toUpperCase()}
      </li>
    );
  });

  return (
    <StyledDestination>
      <ImageContainer className='image-container'>
        <h4 className='page-title'>
          <span>01</span> PICK YOUR DESTINATION
        </h4>

        <img
          src={`${selectedDestination.images.png}`}
          alt={selectedDestination.name}
          className='destination-image'
        />
      </ImageContainer>
      <InfoContainer className='info-container'>
        <ul className='destinations-list'>{destinationsList}</ul>

        <section className='main-info'>
          <h1 className='selected-destination'>
            {selectedDestination.name.toUpperCase()}
          </h1>
          <p className='description'>{selectedDestination.description}</p>
        </section>

        <hr className='hr' />

        <section className='stats'>
          <div className='stat-container'>
            <span className='stat-name'>AVG DISTANCE</span>
            <span className='stat'>
              {selectedDestination.distance.toUpperCase()}
            </span>
          </div>
          <div className='stat-container'>
            <span className='stat-name'>EST TRAVEL TIME</span>
            <span className='stat'>
              {selectedDestination.travel.toUpperCase()}
            </span>
          </div>
        </section>
      </InfoContainer>
    </StyledDestination>
  );
};

export default Destination;
