import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// uncomment to use theatre.js studio
// studio.extend(extension);
// studio.initialize();

root.render(
  <React.StrictMode>
      <Suspense fallback={null}>
          <App/>
      </Suspense>
  </React.StrictMode>
);
