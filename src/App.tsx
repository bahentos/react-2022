import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components';
import FavoritesPage from './pages/FavoritesPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
