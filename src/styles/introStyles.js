export const styles = {
  introContainer: {
    width: '80vw',
    '@media (max-width: 1200px)': {
      height: '100vh',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },

  h1: {
    fontSize: '5rem',
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '3.5rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.8rem',
    },
  },

  h3: {
    color: 'rgba(250, 250, 250, 0.9)',
    marginTop: '20px',
    fontSize: '1.8rem',
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '1.6rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem',
    },
  },
};
