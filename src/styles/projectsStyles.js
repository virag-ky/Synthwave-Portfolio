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
  padding: '0 30px 30px 30px',
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
  cardMedia: {},
  techContainer: {
    background: '#00001c',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 10px',
  },
  tech: {
    color: '#fff',
  },
  content: {},
  paragraph: {
    color: '#00001c',
    fontSize: '0.9rem',
    margin: '20px 0',
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
  },
  container: {
    overflowY: 'scroll',
  },
};
