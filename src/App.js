import { StyledApp } from './App.styles';
import { GlobalStyles } from './Global.styles';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './routes/Home/Home';
import Destination from './routes/Destination/Destination';
import Crew from './routes/Crew/Crew';
import Technology from './routes/Technology/Technology';
import Header from './Header/Header';
import { useState, useEffect } from 'react';
import useWindowDimensions from './helpers/useWindowDimension';
import getBackground from './helpers/getBackground';

const App = () => {
  const { pathname } = useLocation();
  const screenWidth = useWindowDimensions().width;
  const [background, setBackground] = useState(
    getBackground(pathname, screenWidth)
  );

  useEffect(() => {
    const newBackground = getBackground(pathname, screenWidth);
    setBackground(newBackground);
  }, [setBackground, pathname, screenWidth]);

  return (
    <StyledApp background={background}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
    </StyledApp>
  );
};

export default App;
