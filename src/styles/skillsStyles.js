export const styles = {
  width: '70vw',
  maxWidth: '1500px',
  boxShadow: '0 0 45px rgba(250, 250, 250, 0.1)',
  '@media (max-width: 1200px)': {
    width: '95vw',
    height: 'auto',
    maxHeight: 'unset',
    margin: '80px 0 50px 0',
  },
  '@media (max-height: 900px) and (min-width: 1200px)': {
    overflowY: 'scroll',
  },
  height: '85vh',
  maxHeight: '1000px',
  background: 'rgba(0, 0, 28, 0.8)',
  backdropFilter: 'blur(12px)',
  padding: '0 30px 30px 30px',
  borderRadius: '25px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  h2: {
    color: '#fff',
    borderBottom: '1px solid #1495ff',
    padding: '25px 10px',
    display: 'flex',
    marginBottom: '20px',
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '1.5rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.1rem',
      borderRadius: '5px',
    },
  },
  h6: {
    padding: '3px 10px',
    marginRight: '60px',
    letterSpacing: '1px',
    fontSize: '1.1rem',
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '1rem',
      marginRight: '30px',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.9rem',
      marginRight: '0',
    },
  },
};
