import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { styles } from './styles/mainContainerStyles';
import { Box } from '@mui/material';
import './styles/app.css';

const Content = lazy(() => import('./components/content/Content'));
const renderLoader = () => <p>Loading</p>;

const App = () => {
  return (
    <Suspense fallback={renderLoader()}>
      <Box id="App">
        <Content />
        <Box sx={styles}>
          <Outlet />
        </Box>
      </Box>
    </Suspense>
  );
};

export default App;
