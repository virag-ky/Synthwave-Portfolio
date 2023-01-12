import './App.css';
import Content from './components/content/Content';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div id="App">
      <Content />
      <Outlet />
    </div>
  );
};

export default App;
