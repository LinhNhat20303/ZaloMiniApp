import React from 'react';
import { App, View } from 'zmp-framework/react';
import store from '../store';


const MyApp = () => {
  // ZMP Parameters
  const zmpparams = {
    name: 'MyCoffee', // App name
    theme: 'auto', // Automatic theme detection
    // App store
    store: store,
  };

  return (
    <App {...zmpparams} >
      {/* Your main view, should have "view-main" class */}
      <View main className="safe-areas" url="/" />
    </App>
  );
}

export default MyApp;