import background from '../assets/header-bg.webp';

export const styles = {
  backgroundImage: `url(${background})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '50px 0',
  minHeight: '100vh',
  overflowY: 'auto',
  width: { lg: 'calc(100% - 200px)', md: '100%' },
  marginLeft: 'auto',
};
