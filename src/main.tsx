import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import Router from '@/routes/Router';
import { store, persistor } from '@/store/index'

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <Router />
      </Provider>
    </PersistGate>
  </StrictMode>
);
