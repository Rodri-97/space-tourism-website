import { StyledHeader } from './Header.styles';
import Navbar from './Navbar/Navbar';
import { ReactComponent as Logo } from '../assets/shared/logo.svg';

const Header = () => {
  const headerheight = 100;

  return (
    <StyledHeader headerheight={headerheight}>
      <Logo />
      <Navbar headerheight={headerheight} />
    </StyledHeader>
  );
};

export default Header;
