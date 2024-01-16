import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import './index.css';
import Router from '@/routes/Router';
import { store } from '@/store/index'
import "tw-elements-react/dist/css/tw-elements-react.min.css";

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </StrictMode>
);
