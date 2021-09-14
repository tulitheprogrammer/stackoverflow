import React from 'react';
import { Provider } from 'react-redux';
import { setupStore } from '@state';
import { PaperProvider } from '@theme';
import { WelcomePage } from '@pages';

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
