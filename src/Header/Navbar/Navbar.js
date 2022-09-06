import {
  NavbarContainer,
  StyledNavbar,
  StyledHamburger,
  StyledCloseIcon,
  StyledLink,
} from './Navbar.styles';
import useWindowDimensions from '../../helpers/useWindowDimension';
import { minimalTabletWidth } from '../../helpers/screenSizes';
import { useState } from 'react';

const Navbar = ({ headerheight }) => {
  const screenWidth = useWindowDimensions().width;
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const toggleMobileNavbar = () => setShowMobileNavbar(!showMobileNavbar);

  const links = [
    { path: '/', text: 'Home' },
    { path: '/destination', text: 'Destination' },
    { path: '/crew', text: 'Crew' },
    { path: '/technology', text: 'Technology' },
  ];

  const linkComponents = links.map((link, index) => {
    return (
      <StyledLink
        to={link.path}
        key={link.path}
        onClick={() =>
          screenWidth < minimalTabletWidth ? toggleMobileNavbar() : null
        }
      >
        <span>0{index}</span> {link.text}
      </StyledLink>
    );
  });

  if (screenWidth < minimalTabletWidth) {
    if (showMobileNavbar) {
      return (
        <NavbarContainer>
          <StyledNavbar headerheight={headerheight}>
            {linkComponents}
            <StyledCloseIcon
              onClick={() => toggleMobileNavbar()}
              headerheight={headerheight}
            />
          </StyledNavbar>
        </NavbarContainer>
      );
    }
    return (
      <NavbarContainer>
        <StyledHamburger onClick={() => toggleMobileNavbar()} />
      </NavbarContainer>
    );
  }

  return (
    <NavbarContainer>
      <StyledNavbar headerheight={headerheight}>{linkComponents}</StyledNavbar>
    </NavbarContainer>
  );
};

export default Navbar;
