import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from './js/common/state-management/store';
import { PaperProvider } from './js/common/theme';
import { WelcomePage } from './js/pages/WelcomPage';

const store = setupStore();

export default function App() {
  return (
    <Provider store={store} >
      <PaperProvider>
        <WelcomePage />
      </PaperProvider>
    </Provider>
  );
}
