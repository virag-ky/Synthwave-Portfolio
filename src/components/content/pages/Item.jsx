import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import { Button, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Item = ({ project, styles }) => {
  return (
    <Card sx={styles.card}>
      <CardMedia sx={styles.cardMedia} image={project.image} />
      <CardContent>
        <Typography sx={styles.h5} gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body1">{project.description}</Typography>
        <Stack direction="row" spacing={1}>
          {project.technologies.map((tech) => (
            <Chip sx={styles.chip} label={tech} />
          ))}
        </Stack>
      </CardContent>
      <CardActions>
        <Link href={project.liveLink} target="_blank">
          <Button size="small">View Live</Button>
        </Link>
        <Link href={project.githubLink} target="_blank">
          <Button size="small">Source Code</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default Item;
