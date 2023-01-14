import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Intro from './components/content/pages/Intro';
import Projects from './components/content/pages/Projects';
import Skills from './components/content/pages/Skills';
import Contact from './components/content/pages/Contact';
import AboutMe from './components/content/pages/AboutMe';
import { ThemeProvider } from '@mui/material/styles';
import { portfolioTheme } from './portfolioTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Intro />,
      },
      {
        path: 'intro',
        element: <Intro />,
      },
      {
        path: 'about',
        element: <AboutMe />,
      },
      {
        path: 'skills',
        element: <Skills />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={portfolioTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
