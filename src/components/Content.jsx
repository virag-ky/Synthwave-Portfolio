import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import EmailIcon from '@mui/icons-material/Email';
import ConstructionIcon from '@mui/icons-material/Construction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const navIcons = [<HomeIcon/>, <AccountCircleIcon/>, <ConstructionIcon/>, <StarIcon/>, <EmailIcon/>];
const navTexts = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
const socialIcons = [<GitHubIcon/>, <LinkedInIcon/>, <TwitterIcon/>];
const socialTexts = ['GitHub', 'LinkedIn', 'Twitter'];

const drawerWidth = 240;

const Content = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider sx={{backgroundColor: '#1495ff'}} />
      <List>
        {
          navTexts.map((text, id) => (
            <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{color: '#1495ff'}}>
                {navIcons[id]}
              </ListItemIcon>
              <ListItemText sx={{color: '#1495ff'}} primary={text} />
            </ListItemButton>
          </ListItem>
          ))
        }
      </List>
      <Divider sx={{backgroundColor: '#1495ff'}} />
      <List>
       {
        socialTexts.map((text, id) => (
          <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon sx={{color: '#1495ff'}}>
              {socialIcons[id]}
            </ListItemIcon>
            <ListItemText sx={{color: '#1495ff'}} primary={text} />
          </ListItemButton>
        </ListItem>
        ))
       }
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <CssBaseline />
    <Box sx={{ display: 'flex', position: "absolute", paddingLeft: "20px" }}>
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
      sx={{ mr: 2, display: { md: 'none'}}}
    >
      <MenuIcon sx={{color: "#fff"}} />
     </IconButton>
     </Box>
    <Box sx={{ display: 'flex' }}>
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 }}}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#00001c' }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography sx={{color: '#fff', textAlign: 'center'}} variant='h2'>
          Virag Kormoczy
        </Typography>
      </Box>
    
    </Box>
    </>
  );
}

export default Content;