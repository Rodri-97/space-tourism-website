import { minimalDesktopWidth, minimalTabletWidth } from './styleData';

const getDevice = (screenWidth) => {
  if (screenWidth > minimalDesktopWidth) return 'desktop';
  if (screenWidth > minimalTabletWidth) return 'tablet';
  return 'mobile';
};

export const getBackground = (pathname, screenWidth) => {
  const page = pathname === '' ? 'home' : pathname;
  const device = getDevice(screenWidth);
  return `./assets/${page}/background-${page}-${device}.jpg`;
};
