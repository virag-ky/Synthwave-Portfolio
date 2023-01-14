import Content from './components/content/Content';
import { Outlet } from 'react-router-dom';
import { styles } from './styles/mainContainerStyles';
import { Box } from '@mui/material';

const App = () => {
  return (
    <div id="App">
      <Content />
      <Box sx={styles}>
        <Outlet />
      </Box>
    </div>
  );
};

export default App;
