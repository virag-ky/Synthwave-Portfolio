export const styles = {
  boxContainer: {
    display: 'flex',
    '@media (max-width: 600px)': {
      alignItems: 'center',
    },
  },

  navContainer: {
    width: { lg: 200 },
    flexShrink: { lg: 0 },
  },

  navDrawer: {
    desktop: {
      '& .MuiDrawer-paper': {
        display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
        boxSizing: 'border-box',
        width: 200,
        backgroundColor: '#00001c',
      },
    },

    mobile: {
      '& .MuiDrawer-paper': {
        display: { sx: 'block', lg: 'none' },
        boxSizing: 'border-box',
        width: { xs: 80, sm: 180 },
        backgroundColor: '#00001c',
      },
    },
  },
};
