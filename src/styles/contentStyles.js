export const styles = {
  boxContainer: {
    display: 'flex',
  },

  navContainer: {
    width: { lg: 240 },
    flexShrink: { lg: 0 },
  },

  navDrawer: {
    desktop: {
      '& .MuiDrawer-paper': {
        display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
        boxSizing: 'border-box',
        width: 240,
        backgroundColor: '#00001c',
      },
    },

    mobile: {
      '& .MuiDrawer-paper': {
        display: { sx: 'block', lg: 'none' },
        boxSizing: 'border-box',
        width: { xs: 180, sm: 220 },
        backgroundColor: '#00001c',
      },
    },
  },
};
