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
import { styled } from '@mui/material/styles';

const Sidebar = () => {
  const navIcons = [
    <HomeIcon />,
    <AccountCircleIcon />,
    <ConstructionIcon />,
    <StarIcon />,
    <EmailIcon />,
  ];
  const navTexts = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
  const socialIcons = [<GitHubIcon />, <LinkedInIcon />, <TwitterIcon />];
  const socialTexts = ['GitHub', 'LinkedIn', 'Twitter'];

  const StyledIcon = styled(ListItemIcon)(({ theme }) => ({
    color: theme.palette.lightBlue,
  }));

  const StyledText = styled(ListItemText)(({ theme }) => ({
    color: theme.palette.lightBlue,
  }));

  const StyledDivider = styled(Divider)(({ theme }) => ({
    background: theme.palette.lightBlue,
  }));

  return (
    <div>
      <Toolbar />
      <StyledDivider />
      <List>
        {navTexts.map((text, id) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <StyledIcon>{navIcons[id]}</StyledIcon>
              <StyledText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <StyledDivider />
      <List>
        {socialTexts.map((text, id) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <StyledIcon>{socialIcons[id]}</StyledIcon>
              <StyledText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
