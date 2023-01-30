export const styles = {
  icon: {
    color: '#1495ff',
    minWidth: 'unset',
  },
  listItem: {
    padding: '8px 5px',
    transition: '0.8s',
    marginBottom: '20px',
    '@media (max-height: 900px)': {
      marginBottom: '0',
    },
    '&:hover': { background: '#0C2340' },
  },

  listItemButton: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 600px)': {
      justifyContent: 'center',
    },
  },

  span: {
    color: '#1877F2',
    textAlign: 'right',
    fontSize: { lg: '16px', xs: '14px' },
    letterSpacing: '1px',
    '@media (max-width: 600px)': {
      display: 'none',
    },
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
};
