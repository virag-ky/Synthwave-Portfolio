import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Item = ({ project, styles }) => {
  return (
    <Card sx={styles.card}>
      <CardMedia component="img" sx={styles.cardMedia} image={project.image} />
      <CardContent sx={styles.content}>
        <Typography sx={styles.h5} variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography sx={styles.paragraph} variant="body1">
          {project.description}
        </Typography>
        <Stack direction="row" spacing={1}>
          {project.technologies.map((tech) => (
            <Chip sx={styles.chip} label={tech} />
          ))}
        </Stack>
        <CardActions sx={styles.CardActions}>
          <Link sx={styles.link} href={project.liveLink} target="_blank">
            VIEW LIVE
          </Link>
          <Link sx={styles.link} href={project.githubLink} target="_blank">
            SOURCE CODE
          </Link>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Item;
