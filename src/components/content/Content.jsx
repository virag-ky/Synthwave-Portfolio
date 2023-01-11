import { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
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
  });

  const StyledNavContainer = styled(Box)(() => ({
    width: { md: 240 },
    flexShrink: { md: 0 },
  }));

  const NavDrawerMobile = styled(Drawer)(() => ({
    display: { xs: 'block', md: 'none' },
    '& .MuiDrawer-paper': theme.drawerPaper,
  }));

  const NavDrawerDesktop = styled(Drawer)(() => ({
    display: { xs: 'none', md: 'block' },
    '& .MuiDrawer-paper': theme.drawerPaper,
  }));

  const StyledMainBox = styled(Box)(() => ({
    flexGrow: 1,
    p: 3,
    width: { sm: `calc(100% - 240px)` },
  }));

  return (
    <>
      <CssBaseline />
      <ToggleButton handleDrawerToggle={handleDrawerToggle} />
      <Box sx={{ display: 'flex' }}>
        <StyledNavContainer component="nav">
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
          <NavDrawerDesktop variant="permanent" open>
            <ThemeProvider theme={theme}>
              <Sidebar />
            </ThemeProvider>
          </NavDrawerDesktop>
        </StyledNavContainer>
        <StyledMainBox component="main">
          <Toolbar />
          <Typography sx={{ color: '#fff', textAlign: 'center' }} variant="h2">
            Virag Kormoczy
          </Typography>
        </StyledMainBox>
      </Box>
    </>
  );
};

export default Content;
