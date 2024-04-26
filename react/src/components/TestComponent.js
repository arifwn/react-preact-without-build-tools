import {React, ReactDOM} from 'react';
import htm from 'htm';
const html = htm.bind(React.createElement);

// Header component

function Header() {
  return (
  html`<header>
      <h1>Hello!</h1>
  </header>`
  );
}

// Footer component

function Footer() {
  return (
  html`<pre>Just view source this page and you will see all of the code there, easy to follow and learn</pre>`
  )
}

// Home component

export function TestComponent(props) {      
  const [testVal, setTestVal] = React.useState('ok');
  return (
  html`<div>
      <${Header} />
      <h1>Welcome to the Home Page!</h1>
      <div>${props.title}</div>
      <div>${testVal}</div>
      <button onClick=${() => setTestVal('yes')}>click me</button>
      <p>This is the home page content.</p>
      <${Footer} />
  </div>`
  );
}
