import { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Sidebar from '../sidebar/Sidebar';
import { createTheme, ThemeProvider } from '@mui/material';
import ToggleButton from '../sidebar/ToggleButton';
import { styled } from '@mui/material/styles';

const Content = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const theme = createTheme({
    palette: {
      lightBlue: '#1495ff',
    },
    drawerPaper: {
      boxSizing: 'border-box',
      width: 240,
      backgroundColor: '#00001c',
    },
    font: {
      size: '20px',
    },
  });

  const StyledNavContainer = styled(Box)(() => ({
    width: { md: 240 },
    flexShrink: { md: 0 },
  }));

  const NavDrawerMobile = styled(Drawer)(() => ({
    display: { xs: 'block', md: 'none' },
    '& .MuiDrawer-paper': theme.drawerPaper,
  }));

  const StyledMainBox = styled(Box)(() => ({
    flexGrow: 1,
    p: 3,
    width: { sm: 'calc(100% - 240px)' },
  }));

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <StyledNavContainer component="nav" aria-label="nav icons">
          <NavDrawerMobile
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <ThemeProvider theme={theme}>
              <Sidebar />
            </ThemeProvider>
          </NavDrawerMobile>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: 240,
                background: theme.drawerPaper.backgroundColor,
              },
            }}
            open
          >
            <ThemeProvider theme={theme}>
              <Sidebar />
            </ThemeProvider>
          </Drawer>
        </StyledNavContainer>
        <StyledMainBox component="main">
          <ToggleButton handleDrawerToggle={handleDrawerToggle} />
          <Typography sx={{ color: '#fff', textAlign: 'center' }} variant="h2">
            Virag Kormoczy
          </Typography>
        </StyledMainBox>
      </Box>
    </div>
  );
};

export default Content;
