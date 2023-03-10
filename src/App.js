import Content from './components/content/Content';
import { Outlet } from 'react-router-dom';
import { styles } from './styles/mainContainerStyles';
import { Box } from '@mui/material';
import './styles/app.css';

const App = () => {
  return (
    <Box id="App">
      <Content />
      <Box sx={styles}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default App;
