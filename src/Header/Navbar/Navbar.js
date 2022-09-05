import { StyledNavbar } from './Navbar.styles';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <StyledNavbar>
      <Link to='/'>Home</Link>
      <Link to='/destination'>Destination</Link>
      <Link to='/crew'>Crew</Link>
      <Link to='/technology'>Technology</Link>
    </StyledNavbar>
  );
};

export default Navbar;
