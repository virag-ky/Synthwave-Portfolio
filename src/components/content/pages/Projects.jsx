import Carousel from 'react-material-ui-carousel';
import { Button, Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { projects } from './projectsData';
import { styles } from '../../../styles/projectsStyles';

function Item({ project }) {
  return (
    <Card sx={{ width: 500 }}>
      <CardMedia sx={{ height: 200 }} image="" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body1">{project.description}</Typography>
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
}

const Projects = () => {
  return (
    <Box sx={styles}>
      <Typography variant="h2" sx={styles.h2}>
        Projects
      </Typography>
      <Carousel>
        {projects.map((project) => (
          <Item key={project.name} project={project} />
        ))}
      </Carousel>
    </Box>
  );
};

export default Projects;
