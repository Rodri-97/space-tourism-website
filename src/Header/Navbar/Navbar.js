import { NavbarContainer, StyledNavbar, StyledLink } from './Navbar.styles';
import useWindowDimensions from '../../helpers/useWindowDimension';
import { minimalTabletWidth } from '../../helpers/styleData';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { links } from '../../helpers/links';

const Navbar = ({ headerheight }) => {
  const screenWidth = useWindowDimensions().width;
  const [showMobileNavbar, setShowMobileNavbar] = useState(false);
  const toggleMobileNavbar = () => setShowMobileNavbar(!showMobileNavbar);
  const currentPage = useLocation().pathname;

  const linkComponents = links.map((link, index) => {
    return (
      <StyledLink
        to={link.path}
        key={link.path}
        onClick={() =>
          screenWidth < minimalTabletWidth ? toggleMobileNavbar() : null
        }
        style={
          currentPage === link.path && screenWidth > minimalTabletWidth
            ? { borderBottomColor: 'white' }
            : null
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
            <div
              className='icon close-icon'
              onClick={() => toggleMobileNavbar()}
              headerheight={headerheight}
            ></div>
          </StyledNavbar>
        </NavbarContainer>
      );
    }
    return (
      <NavbarContainer>
        <div
          className='icon hamburger-icon'
          onClick={() => toggleMobileNavbar()}
        ></div>
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
