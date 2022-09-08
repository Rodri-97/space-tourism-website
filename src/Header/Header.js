import { StyledHeader } from './Header.styles';
import Navbar from './Navbar/Navbar';

const Header = () => {
  const headerheight = 100;

  return (
    <StyledHeader headerheight={headerheight}>
      <div className='logo'></div>
      <Navbar headerheight={headerheight} />
    </StyledHeader>
  );
};

export default Header;
