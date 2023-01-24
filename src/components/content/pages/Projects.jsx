import { lazy, Suspense } from 'react';
import { Oval } from 'react-loader-spinner';
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { projects } from './projectsData';
import { styles } from '../../../styles/projectsStyles';

const Item = lazy(() => import('./Item'));
const renderLoader = () => (
  <Oval
    height={80}
    width={80}
    color="#2f0978"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel="oval-loading"
    secondaryColor="#7023ff"
    strokeWidth={2}
    strokeWidthSecondary={2}
  />
);

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
