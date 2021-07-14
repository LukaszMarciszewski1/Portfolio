const size = {
  laptop: '1280px',
  tablet: '1100px',
  tabletM: '800px',
  mobile: '600px'
};

export const device = {
  laptop: `(max-width: ${size.laptop})`,
  tablet: `(max-width: ${size.tablet})`,
  tabletM: `(max-width: ${size.tabletM})`,
  mobile: `(max-width: ${size.mobile})`,
};

export default device;