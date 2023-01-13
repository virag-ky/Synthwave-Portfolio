import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Toolbar from '@mui/material/Toolbar';
import { IconButton, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import profile from '../../assets/profile2.jpg';
import Link from '@mui/material/Link';
import { NavLinks } from './links';
import { SocialLinks } from './links';
import { useNavigate } from 'react-router-dom';
import { styles } from './sidebarStyles';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div id="nav-icons-container">
      <div>
        <Toolbar sx={styles.toolbar}>
          <Avatar alt="Virag Kormoczy" src={profile} sx={styles.avatar} />
        </Toolbar>
        <List>
          {NavLinks.map((navLink) => (
            <ListItem
              sx={styles.listItem}
              onClick={() => navigate(navLink.route)}
              key={navLink.id}
            >
              <ListItemButton sx={styles.listItemButton}>
                <ListItemIcon sx={styles.icon}>{navLink.icon}</ListItemIcon>
                <Typography variant="span" sx={styles.span}>
                  {navLink.label}
                </Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
      <div id="social-icons-container">
        {SocialLinks.map((link) => (
          <Link key={link.id} href={link.link} target="_blank">
            <IconButton sx={styles.iconButton}>{link.icon}</IconButton>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
