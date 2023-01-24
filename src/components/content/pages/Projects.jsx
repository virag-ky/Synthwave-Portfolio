import { lazy, Suspense } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { projects } from './projectsData';
import { styles } from '../../../styles/projectsStyles';

const Item = lazy(() => import('./Item'));
const renderLoader = () => <p>Loading</p>;

const Projects = () => {
  return (
    <Suspense fallback={renderLoader()}>
      <Box sx={styles}>
        <Typography variant="h2" sx={styles.h2}>
          Projects
        </Typography>
        <Carousel sx={styles.carousel}>
          {projects.map((project) => (
            <Item key={project.name} styles={styles} project={project} />
          ))}
        </Carousel>
      </Box>
    </Suspense>
  );
};

export default Projects;
