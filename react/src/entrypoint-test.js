import {React, ReactDOM} from 'react';
import htm from 'htm';

import {TestComponent} from './components/TestComponent.js';

const html = htm.bind(React.createElement);

// Header component

function App() {
  return (
  html`<header>
      <${TestComponent} title=${"hello world!"}>
  </header>`
  );
}

ReactDOM.render(html`<${App} />`, document.getElementById('root'));