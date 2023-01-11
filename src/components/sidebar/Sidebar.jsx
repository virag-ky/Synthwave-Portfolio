import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
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
import { IconButton } from '@mui/material';

const Sidebar = () => {
  const navIcons = [
    <HomeIcon />,
    <AccountCircleIcon />,
    <ConstructionIcon />,
    <StarIcon />,
    <EmailIcon />,
  ];

  const SocialIcons = [<GitHubIcon />, <TwitterIcon />, <LinkedInIcon />, 'M'];

  const navTexts = ['Intro', 'About', 'Skills', 'Projects', 'Contact'];

  const StyledIcon = styled(ListItemIcon)(({ theme }) => ({
    color: theme.palette.lightBlue,
  }));

  const StyledText = styled('span')(() => ({
    color: '#1877F2',
    textAlign: 'right',
    fontSize: '18px',
    letterSpacing: '1px',
  }));

  const StyledListItem = styled(ListItem)(() => ({
    padding: '8px 5px',
    '&:hover': { background: '#0C2340' },
  }));

  const StyledListButton = styled(ListItemButton)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
  }));

  return (
    <div id="nav-icons-container">
      <div>
        <Toolbar />
        <List>
          {navTexts.map((text, id) => (
            <StyledListItem key={text}>
              <StyledListButton>
                <StyledIcon>{navIcons[id]}</StyledIcon>
                <StyledText>{text}</StyledText>
              </StyledListButton>
            </StyledListItem>
          ))}
        </List>
      </div>
      <div id="social-icons-container">
        {SocialIcons.map((icon) => (
          <IconButton sx={{ color: '#1495ff' }}>{icon}</IconButton>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
