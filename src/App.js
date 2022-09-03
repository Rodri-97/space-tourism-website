import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './routes/Home';
import Destination from './routes/Destination';
import Crew from './routes/Crew';
import Technology from './routes/Technology';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='destination' element={<Destination />} />
      <Route path='crew' element={<Crew />} />
      <Route path='technology' element={<Technology />}></Route>
    </Routes>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/destination'>Destination</Link>
      <Link to='/crew'>Crew</Link>
      <Link to='/technology'>Technology</Link>
    </nav>
  </BrowserRouter>
);

export default App;
