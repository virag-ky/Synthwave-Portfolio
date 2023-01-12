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
import Avatar from '@mui/material/Avatar';
import profile from '../../assets/profile2.jpg';
import Link from '@mui/material/Link';

const Sidebar = () => {
  const navIcons = [
    <HomeIcon sx={{ fontSize: '32px' }} />,
    <AccountCircleIcon sx={{ fontSize: '30px' }} />,
    <ConstructionIcon sx={{ fontSize: '32px' }} />,
    <StarIcon sx={{ fontSize: '32px' }} />,
    <EmailIcon sx={{ fontSize: '30px' }} />,
  ];

  const SocialIcons = [
    <GitHubIcon sx={{ fontSize: '28px' }} />,
    <TwitterIcon sx={{ fontSize: '28px' }} />,
    <LinkedInIcon sx={{ fontSize: '28px' }} />,
  ];

  const socialLinks = [
    'https://github.com/virag-ky',
    'https://twitter.com/Virag_Ky',
    'https://www.linkedin.com/in/virag-kormoczy/',
  ];

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
        <Toolbar sx={{ padding: '50px 20px' }}>
          <Avatar
            alt="Virag Kormoczy"
            src={profile}
            sx={{ width: '80px', height: 'auto' }}
          />
        </Toolbar>
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
        {SocialIcons.map((icon, id) => (
          <Link href={socialLinks[id]} target="_blank">
            <IconButton
              key={id}
              sx={{
                color: '#1495ff',
                '&:hover': { boxShadow: '0 0 30px #f65ee0', color: '#f65ee0' },
              }}
            >
              {icon}
            </IconButton>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
