import ReactDOM from 'react-dom';

import { AppProviders } from './providers/AppProviders';

import { App } from './components/app/App';

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root'),
);

