export const styles = {
  boxContainer: {
    display: 'flex',
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
        width: { xs: 180 },
        backgroundColor: '#00001c',
      },
    },
  },
};
