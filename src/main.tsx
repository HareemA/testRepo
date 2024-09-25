export { default as RenderApp } from "../src/App.jsx";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Define the router with routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Main app component that handles internal routing
  },
  
]);

// Render the application
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
