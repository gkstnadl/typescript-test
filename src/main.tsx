import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'test-redux/config/configstore.ts';
import App from './App.tsx';
import 'styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
