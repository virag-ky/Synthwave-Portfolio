import background from '../assets/header-bg.png';

export const styles = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: { lg: 'calc(100% - 200px)', md: '100%' },
  marginLeft: 'auto',
  '@media (max-width: 1200px)': {
    height: 'auto',
    minHeight: '100vh',
    backgroundAttachment: 'fixed',
  },
};
