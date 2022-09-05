import { AppContainer } from './AppContainer.styles';
import { GlobalStyles } from './Global.styles';
import { Routes, Route, useLocation } from 'react-router-dom';
import { StyledHome } from './routes/Home/Home.styles';
import { StyledDestination } from './routes/Destination/Destination.styles';
import { StyledCrew } from './routes/Crew/Crew.styles';
import { StyledTechnology } from './routes/Technology/Technology.styles';
import { StyledNavbar } from './Navbar/Navbar.styles';
import { useState, useEffect } from 'react';
import useWindowDimensions from './helpers/useWindowDimension';

import homeMobile from './assets/home/background-home-mobile.jpg';
import homeTablet from './assets/home/background-home-tablet.jpg';
import homeDesktop from './assets/home/background-home-desktop.jpg';

import destinationMobile from './assets/destination/background-destination-mobile.jpg';
import destinationTablet from './assets/destination/background-destination-tablet.jpg';
import destinationDesktop from './assets/destination/background-destination-desktop.jpg';

import crewMobile from './assets/crew/background-crew-mobile.jpg';
import crewTablet from './assets/crew/background-crew-tablet.jpg';
import crewDesktop from './assets/crew/background-crew-desktop.jpg';

import technologyMobile from './assets/technology/background-technology-mobile.jpg';
import technologyTablet from './assets/technology/background-technology-tablet.jpg';
import technologyDesktop from './assets/technology/background-technology-desktop.jpg';

const homeBackgrounds = [homeDesktop, homeTablet, homeMobile];
const destinationBackgrounds = [
  destinationDesktop,
  destinationTablet,
  destinationMobile,
];
const crewBackgrounds = [crewDesktop, crewTablet, crewMobile];
const technologyBackgrounds = [
  technologyDesktop,
  technologyTablet,
  technologyMobile,
];

const App = () => {
  const pathname = useLocation().pathname;
  const screenWidth = useWindowDimensions().width;
  const [currentBackground, setCurrentBackground] = useState(homeMobile);

  useEffect(() => {
    const newBackground = getNewBackground(pathname, screenWidth);
    setCurrentBackground(newBackground);
  }, [setCurrentBackground, pathname, screenWidth]);

  return (
    <AppContainer currentBackground={currentBackground}>
      <GlobalStyles />
      <header>
        <StyledNavbar />
      </header>
      <Routes>
        <Route path='/' element={<StyledHome />} />
        <Route path='/destination' element={<StyledDestination />} />
        <Route path='/crew' element={<StyledCrew />} />
        <Route path='/technology' element={<StyledTechnology />} />
      </Routes>
    </AppContainer>
  );
};

const getNewBackground = (pathname, screenWidth) => {
  let backgrounds;
  if (pathname === '/') backgrounds = homeBackgrounds;
  if (pathname === '/destination') backgrounds = destinationBackgrounds;
  if (pathname === '/crew') backgrounds = crewBackgrounds;
  if (pathname === '/technology') backgrounds = technologyBackgrounds;
  if (screenWidth > 1200) return backgrounds[0];
  if (screenWidth > 600) return backgrounds[1];
  return backgrounds[2];
};

export default App;
