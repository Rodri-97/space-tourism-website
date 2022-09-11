import { StyledCrew, InfoContainer } from './Crew.styles';
import { useState } from 'react';
import data from '../../data.json';

const Crew = () => {
  const [selectedPerson, setSelectedPerson] = useState(data.crew[0]);

  const allBullets = data.crew.map((person) => {
    return (
      <li
        className='bullet'
        onClick={() => setSelectedPerson(person)}
        key={person.name}
        style={
          selectedPerson.name === person.name
            ? { backgroundColor: 'white' }
            : null
        }
      ></li>
    );
  });

  return (
    <StyledCrew>
      <h4 className='page-title'>
        <span>02</span> MEET YOUR CREW
      </h4>

      <img
        src={selectedPerson.images.png}
        alt={selectedPerson.name}
        className='person-img'
      />

      <InfoContainer className='info-container'>
        <ul className='bullets'>{allBullets}</ul>
        <div className='main-info'>
          <h3 className='role'>{selectedPerson.role.toUpperCase()}</h3>
          <h2 className='name'>{selectedPerson.name.toUpperCase()}</h2>
        </div>
        <p className='bio'>{selectedPerson.bio}</p>
      </InfoContainer>
    </StyledCrew>
  );
};

export default Crew;
