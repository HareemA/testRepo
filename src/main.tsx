export { default as RenderApp } from "../src/App.jsx";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./Components/Home.tsx";
import './index.css';
import About from "./Components/About.tsx";

// Define the router with routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />, // Main app component that handles internal routing
  },
  {
    path: '/',
    element: <About />, // Main app component that handles internal routing
  },
  
]);

// Render the application
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
