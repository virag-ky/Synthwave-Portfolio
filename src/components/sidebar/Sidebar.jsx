import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Toolbar from '@mui/material/Toolbar';
import { IconButton, Typography, Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import profile from '../../assets/profile2.webp';
import Link from '@mui/material/Link';
import { NavLinks } from './links';
import { SocialLinks } from './links';
import { useNavigate } from 'react-router-dom';
import { styles } from '../../styles/sidebarStyles';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Box sx={styles.navLinksContainer}>
      <Box>
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
      </Box>
      <Box sx={styles.socialLinksContainer}>
        {SocialLinks.map((link) => (
          <Link key={link.id} href={link.link} target="_blank">
            <IconButton sx={styles.iconButton}>{link.icon}</IconButton>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;
