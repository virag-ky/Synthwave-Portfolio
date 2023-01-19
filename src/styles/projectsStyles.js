export const styles = {
  width: '70vw',
  maxWidth: '1500px',
  '@media (max-width: 1200px)': {
    width: '95vw',
    height: 'auto',
    maxHeight: 'unset',
    margin: '80px 0 50px 0',
  },
  height: '85vh',
  maxHeight: '1000px',
  background: 'rgba(0, 0, 28, 0.8)',
  backdropFilter: 'blur(12px)',
  padding: '30px',
  borderRadius: '25px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  h2: {
    background: 'rgba(250, 250, 250, 0.9)',
    borderRadius: '10px',
    padding: '5px 10px',
    marginBottom: '20px',
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '1.5rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.1rem',
    },
  },
};
