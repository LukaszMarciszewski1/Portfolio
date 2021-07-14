const size = {
  laptopLg: '1500px',
  laptop: '1250px',
  tablet: '1100px',
  mobile: '550px'
};

export const device = {
  laptopLg: `(max-width: ${size.laptopLg})`,
  laptop: `(max-width: ${size.laptop})`,
  tablet: `(max-width: ${size.tablet})`,
  mobile: `(max-width: ${size.mobile})`,
};

export default device;