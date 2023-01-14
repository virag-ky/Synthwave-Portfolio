import { createTheme } from '@mui/material/styles';

export const portfolioTheme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h2',
          h2: 'h2',
          h3: 'h2',
          h4: 'h2',
          h5: 'h2',
          h6: 'h2',
          body1: 'p',
          body2: 'span',
        },
      },
    },
  },

  typography: {
    fontFamily: 'Orbitron',
    h1: {
      fontSize: '5.5rem',
      '@media (min-width: 601px) and (max-width: 1200px)': {
        fontSize: '4rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      color: 'rgba(250, 250, 250, 0.7)',
      marginTop: '20px',
      fontSize: '2.5rem',
      '@media (min-width: 601px) and (max-width: 1200px)': {
        fontSize: '2rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '1rem',
      },
    },
  },
});
