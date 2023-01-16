export const styles = {
  width: '70vw',
  maxWidth: '1500px',
  '@media (max-width: 1200px)': {
    width: '90vw',
  },
  height: '85vh',
  maxHeight: '1000px',
  background: 'rgba(0, 0, 28, 0.9)',
  padding: '30px',
  borderRadius: '25px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  '@media (max-width: 600px)': {
    width: '95vw',
    height: 'auto',
    maxHeight: 'unset',
  },
  h2: {
    background: 'rgba(250, 250, 250, 0.9)',
    borderRadius: '10px',
    padding: '5px 10px',
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '1.8rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.2rem',
    },
  },
  p: {
    fontSize: '1.3rem',
    lineHeight: '1.6',
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '1.2rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem',
    },
  },
};
