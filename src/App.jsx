import { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import HomePage from './pages/HomePage';

function AppInner() {
  return <HomePage />;
}

export default function App() {
  return (
    <AppProvider>
      <AppInner />
    </AppProvider>
  );
}
