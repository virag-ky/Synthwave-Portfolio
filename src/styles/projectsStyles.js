export const styles = {
  width: '70vw',
  maxWidth: '1500px',
  boxShadow: '0 0 45px rgba(250, 250, 250, 0.2)',
  '@media (max-width: 1200px)': {
    width: '95vw',
    maxHeight: 'unset',
    margin: '80px 0 50px 0',
  },
  '@media (max-width: 600px)': {
    padding: '10px',
  },
  height: '85vh',
  maxHeight: '1000px',
  background: 'rgba(0, 0, 28, 0.8)',
  backdropFilter: 'blur(12px)',
  padding: '0 30px 50px 30px',
  borderRadius: '25px',
  display: 'flex',
  flexDirection: 'column',
  h2: {
    color: '#fff',
    borderBottom: '1px solid #1495ff',
    padding: '25px 10px',
    marginBottom: '20px',
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '1.5rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.1rem',
    },
  },
  h5: {
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '1.3rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.1rem',
    },
  },
  card: {
    marginBottom: '30px',
  },
  techContainer: {
    borderRadius: '8px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    '@media (min-width: 601px) and (max-width: 1200px)': {
      gap: '20px',
    },
    '@media (min-width: 1201px)': {
      gap: '25px',
    },
  },
  tech: {
    color: '#00001c',
    background: 'rgba(0, 0, 0, 0.1)',
    padding: '6px',
    borderRadius: '5px',
  },
  paragraph: {
    color: '#00001c',
    fontSize: '0.9rem',
    margin: '20px 0',
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '1.1rem',
    },
    '@media (min-width: 1201px)': {
      fontSize: '1.2rem',
    },
  },
  buttons: {
    width: '100%',
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
  },
  link: {
    textDecoration: 'none',
    background: '#1495ff',
    color: '#fff',
    padding: '8px',
    borderRadius: '5px',
    fontSize: '0.6rem',
    fontWeight: 700,
    transition: '0.8s',
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '0.8rem',
    },
    '@media (min-width: 1201px)': {
      fontSize: '0.9rem',
    },
    '&:hover': {
      background: '#0C2340',
    },
  },
  container: {
    overflowY: 'scroll',
  },
};
