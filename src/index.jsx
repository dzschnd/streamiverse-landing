import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
// import studio from '@theatre/studio'
// import extension from '@theatre/r3f/dist/extension'

const root = ReactDOM.createRoot(document.getElementById('root'));

// studio.extend(extension);
// studio.initialize();

root.render(
  <React.StrictMode>
      <Suspense fallback={<LoadingScreen/>}>
          <App/>
      </Suspense>
  </React.StrictMode>
);
