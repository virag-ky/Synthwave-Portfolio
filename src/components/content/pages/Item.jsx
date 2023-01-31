import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import { Typography, Box, ListItem, ListItemText } from '@mui/material';

const Item = ({ project, styles }) => {
  return (
    <Card sx={styles.card}>
      <CardMedia
        sx={styles.cardMedia}
        component="img"
        image={project.image}
        loading="lazy"
      />
      <CardContent sx={styles.content}>
        <Typography sx={styles.h5} variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography sx={styles.paragraph} variant="body1">
          {project.description}
        </Typography>
        <Box sx={styles.techContainer}>
          {project.technologies.map((tech) => (
            <Typography sx={styles.tech} variant="body2" key={tech}>
              {tech}
            </Typography>
          ))}
        </Box>

        <Box sx={styles.buttons}>
          <Link sx={styles.link} href={project.liveLink} target="_blank">
            VIEW LIVE
          </Link>
          <Link sx={styles.link} href={project.githubLink} target="_blank">
            SOURCE CODE
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Item;
