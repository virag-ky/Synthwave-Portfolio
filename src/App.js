import './App.css';
import Content from './components/content/Content';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div id="App">
      <Content />
      <main id="main">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
