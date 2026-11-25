import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import originalHtml from './original-body.html';

function App() {
  useEffect(() => {
    // Initialize the unchanged original website JavaScript after React mounts the HTML.
    import('./original-behavior.js');
  }, []);
  return React.createElement('div', { dangerouslySetInnerHTML: { __html: originalHtml } });
}

createRoot(document.getElementById('root')).render(React.createElement(App));
