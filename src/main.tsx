import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';  // <-- change BrowserRouter to HashRouter
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById("root")!).render(
  <HashRouter>   {/* <-- remove basename here */}
    <App />
  </HashRouter>
);
