import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </React.StrictMode>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
