import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // <-- import BrowserRouter
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/portfolio">   {/* <-- add basename here */}
    <App />
  </BrowserRouter>
);
