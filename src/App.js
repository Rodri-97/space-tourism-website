import { AppContainer } from './AppContainer.styles';
import { GlobalStyles } from './Global.styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StyledHome } from './routes/Home/Home.styles';
import { StyledDestination } from './routes/Destination/Destination.styles';
import { StyledCrew } from './routes/Crew/Crew.styles';
import { StyledTechnology } from './routes/Technology/Technology.styles';
import { StyledNavbar } from './Navbar.styles';

const App = () => (
  <AppContainer>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<StyledHome />} />
        <Route path='/destination' element={<StyledDestination />} />
        <Route path='/crew' element={<StyledCrew />} />
        <Route path='/technology' element={<StyledTechnology />} />
      </Routes>
      <StyledNavbar />
    </BrowserRouter>
  </AppContainer>
);

export default App;
