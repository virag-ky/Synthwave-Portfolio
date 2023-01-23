export const styles = {
  icon: {
    color: '#1495ff',
  },

  iconButton: {
    color: '#1495ff',
    '&:hover': { boxShadow: '0 0 30px #f65ee0', color: '#f65ee0' },
  },

  listItem: {
    padding: '8px 5px',
    transition: '0.5s',
    '&:hover': { background: '#0C2340' },
  },

  listItemButton: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  span: {
    color: '#1877F2',
    textAlign: 'right',
    fontSize: { lg: '16px', xs: '14px' },
    letterSpacing: '1px',
  },

  avatar: {
    width: { lg: '80px', sm: '50px' },
    height: 'auto',
  },

  toolbar: {
    padding: '50px 20px',
  },

  toggleContainer: {
    display: 'flex',
    position: 'absolute',
    paddingLeft: '20px',
  },

  toggleButton: {
    mr: 2,
    display: { lg: 'none' },
    position: 'fixed',
  },

  menuIcon: {
    color: '#fff',
    fontSize: '32px',
  },

  navLinksContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  socialLinksContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 15px',
  },
};
