import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './pages/Navbar';
import Books from './pages/Books';
import Categories from './pages/Categories';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="Categories" element={<Categories />} />
      </Routes>

    </div>
  );
}

export default App;
