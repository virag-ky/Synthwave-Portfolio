import './App.css';
import Content from './components/content/Content';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div id="App">
      <Content />
      <div id="main">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
