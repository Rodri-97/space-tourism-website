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
import getBackground from './helpers/getBackground';

const App = () => {
  const pathname = useLocation().pathname;
  const screenWidth = useWindowDimensions().width;
  const [currentBackground, setCurrentBackground] = useState(
    getBackground(pathname, screenWidth)
  );

  useEffect(() => {
    const newBackground = getBackground(pathname, screenWidth);
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

export default App;
