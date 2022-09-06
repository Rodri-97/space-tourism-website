import { StyledHeader } from './Header.styles';
import Navbar from './Navbar/Navbar';
import { ReactComponent as Logo } from '../assets/shared/logo.svg';

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Navbar />
    </StyledHeader>
  );
};

export default Header;
