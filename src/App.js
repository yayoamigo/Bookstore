import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './pages/Navbar';
import Books from './pages/Books';
import Categorie from './pages/Categorie';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="Categorie" element={<Categorie />} />
      </Routes>

    </div>
  );
}

export default App;
