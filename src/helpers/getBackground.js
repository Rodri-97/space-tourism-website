import homeMobile from '../assets/home/background-home-mobile.jpg';
import homeTablet from '../assets/home/background-home-tablet.jpg';
import homeDesktop from '../assets/home/background-home-desktop.jpg';

import destinationMobile from '../assets/destination/background-destination-mobile.jpg';
import destinationTablet from '../assets/destination/background-destination-tablet.jpg';
import destinationDesktop from '../assets/destination/background-destination-desktop.jpg';

import crewMobile from '../assets/crew/background-crew-mobile.jpg';
import crewTablet from '../assets/crew/background-crew-tablet.jpg';
import crewDesktop from '../assets/crew/background-crew-desktop.jpg';

import technologyMobile from '../assets/technology/background-technology-mobile.jpg';
import technologyTablet from '../assets/technology/background-technology-tablet.jpg';
import technologyDesktop from '../assets/technology/background-technology-desktop.jpg';

const homeBackgrounds = [homeDesktop, homeTablet, homeMobile];
const destinationBackgrounds = [
  destinationDesktop,
  destinationTablet,
  destinationMobile,
];
const crewBackgrounds = [crewDesktop, crewTablet, crewMobile];
const technologyBackgrounds = [
  technologyDesktop,
  technologyTablet,
  technologyMobile,
];

const getBackground = (pathname, screenWidth) => {
  let backgrounds;
  if (pathname === '/') backgrounds = homeBackgrounds;
  if (pathname === '/destination') backgrounds = destinationBackgrounds;
  if (pathname === '/crew') backgrounds = crewBackgrounds;
  if (pathname === '/technology') backgrounds = technologyBackgrounds;
  if (screenWidth > 1200) return backgrounds[0];
  if (screenWidth > 600) return backgrounds[1];
  return backgrounds[2];
};

export default getBackground;
