import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import profile from '../../assets/profile2.jpg';
import Link from '@mui/material/Link';
import { NavLinks } from './Links';
import { SocialLinks } from './Links';

const Sidebar = () => {
  const StyledIcon = styled(ListItemIcon)(({ theme }) => ({
    color: theme.palette.lightBlue,
  }));

  const StyledIconButton = styled(IconButton)(() => ({
    color: '#1495ff',
    '&:hover': { boxShadow: '0 0 30px #f65ee0', color: '#f65ee0' },
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
            <StyledIconButton key={id}>{icon}</StyledIconButton>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
