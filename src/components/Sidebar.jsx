import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import EmailIcon from '@mui/icons-material/Email';
import ConstructionIcon from '@mui/icons-material/Construction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Toolbar from '@mui/material/Toolbar';

const Sidebar = () => {

  const navIcons = [<HomeIcon/>, <AccountCircleIcon/>, <ConstructionIcon/>, <StarIcon/>, <EmailIcon/>];
  const navTexts = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
  const socialIcons = [<GitHubIcon/>, <LinkedInIcon/>, <TwitterIcon/>];
  const socialTexts = ['GitHub', 'LinkedIn', 'Twitter'];

  return (
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
)};

export default Sidebar;