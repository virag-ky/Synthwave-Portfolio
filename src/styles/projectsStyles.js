export const styles = {
  width: '70vw',
  maxWidth: '1500px',
  '@media (max-width: 1200px)': {
    width: '95vw',
    height: 'auto',
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
  padding: '30px 30px 10px 30px',
  borderRadius: '25px',
  display: 'flex',
  flexDirection: 'column',
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
      borderRadius: '5px',
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
    width: '100%',
    height: '650px',
  },
  cardMedia: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'top',
    '@media (max-width: 600px)': {
      objectPosition: '8%',
    },
  },
  divBackground: {
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 28, 0.8)',
    backdropFilter: 'blur(2px)',
    position: 'absolute',
    top: '0',
    left: '0',
  },
  chip: {
    background: 'rgba(250, 250, 250, 0.9)',
    fontWeight: 700,
    fontFamily: 'Oxygen',
    width: '90px',
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '0.8rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.7rem',
      width: '80px',
    },
  },
  tech: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  content: {
    width: '55%',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    padding: '15px 30px',
    position: 'absolute',
    bottom: '10%',
    background: 'rgba(250, 250, 250, 0)',
    '@media (min-width: 601px) and (max-width: 1200px)': {
      width: '70%',
      bottom: '0',
    },
    '@media (max-width: 600px)': {
      width: '100%',
      gap: '20px',
      bottom: '0',
    },
  },
  paragraph: {
    fontSize: '1.2rem',
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '1.1rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem',
    },
  },
  link: {
    textDecoration: 'none',
    background: '#1495ff',
    fontSize: '0.8rem',
    fontWeight: 700,
    width: '120px',
    textAlign: 'center',
    borderRadius: '5px',
    padding: '8px 10px',
    color: '#fff',
    letterSpacing: '1px',
    marginTop: '25px',
    '&:hover': {
      background: '#0C2340',
    },
    '@media (min-width: 601px) and (max-width: 1200px)': {
      fontSize: '0.7rem',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.6rem',
      width: '100px',
    },
  },
  carousel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
};
