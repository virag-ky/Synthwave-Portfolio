export const styles = {
  introContainer: {
    width: '80vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },

  h1: {
    fontSize: '5.5rem',
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '4rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '2rem',
    },
  },

  h3: {
    color: 'rgba(250, 250, 250, 0.7)',
    marginTop: '20px',
    fontSize: '2.5rem',
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '2rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem',
    },
  },
};
