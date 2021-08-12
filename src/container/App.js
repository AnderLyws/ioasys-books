import React from 'react';
import { AuthProvider } from '../hooks/AuthContext';
import Routes from '../routes';

const App = () => (
  <AuthProvider>
    <Routes />
  </AuthProvider>
);

export default App;