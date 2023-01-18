import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { sectionNames, listItems } from './skillsData';
import { styles } from '../../../styles/skillsStyles';
import '../../../styles/icons.css';

const Skills = () => {
  return (
    <Box sx={styles}>
      <Typography sx={styles.h2} variant="h2">
        Skills
      </Typography>
      <Grid container spacing={2}>
        {sectionNames.map((title, id) => (
          <Grid md={4} sm={4} xs={12} key={title} item>
            <Typography sx={styles.h6} variant="h6">
              {title}
            </Typography>
            <List>
              {listItems[id].map((item) => (
                <ListItem key={item.name}>
                  <ListItemIcon>
                    <img alt="icon" src={item.icon} />
                  </ListItemIcon>
                  <Divider sx={{ mx: 1 }} />
                  <ListItemText>
                    <Typography variant="body2">{item.name}</Typography>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
