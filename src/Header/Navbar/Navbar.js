import { StyledNavbar, StyledHamburger } from './Navbar.styles';
import { Link } from 'react-router-dom';
import useWindowDimensions from '../../helpers/useWindowDimension';
import { minimalTabletWidth } from '../../helpers/screenSizes';

const Navbar = () => {
  const screenWidth = useWindowDimensions().width;

  if (screenWidth < minimalTabletWidth) {
    return (
      <StyledNavbar>
        <StyledHamburger />
      </StyledNavbar>
    );
  }

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
