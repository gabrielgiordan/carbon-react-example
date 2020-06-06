import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');

  act(() => {
    ReactDOM.render(
      <React.StrictMode>
        <HashRouter>
          <App />
        </HashRouter>
      </React.StrictMode>,
      div,
    );
  });

  ReactDOM.unmountComponentAtNode(div);
});
