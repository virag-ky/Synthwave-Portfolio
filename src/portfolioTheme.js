import { createTheme } from '@mui/material/styles';

export const portfolioTheme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'h3',
          h4: 'h4',
          h5: 'h5',
          h6: 'h6',
          body1: 'p',
          body2: 'span',
        },
      },
    },
  },

  typography: {
    fontFamily: 'Orbitron',
    body1: {
      fontFamily: 'Oxygen',
      color: 'rgba(250, 250, 250, 0.9)',
    },
    h2: {
      color: '#00001c',
      fontSize: '1.8rem',
      fontWeight: 700,
    },
    h5: {
      color: '#fff',
    },
    h6: {
      color: '#00001c',
      fontWeight: 700,
    },
    body2: {
      fontSize: '1rem',
      fontFamily: 'Oxygen',
      '@media (max-width: 600px)': {
        fontSize: '0.9rem',
        letterSpacing: '1px',
      },
    },
  },
});
