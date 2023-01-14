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
});
