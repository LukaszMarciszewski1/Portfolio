const size = {
  laptop: '1500px',
  tablet: '1100px',
  mobile: '550px'
};

export const device = {
  laptop: `(max-width: ${size.laptop})`,
  tablet: `(max-width: ${size.tablet})`,
  mobile: `(max-width: ${size.mobile})`,
};

export default device;