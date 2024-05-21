import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import First from './components/first'; // Assuming First is a component
import Empresarial from './components/empresarial/empresarial';
import ResponsiveAppBar from './components/appbar';
import Footer from './components/footer';
function App() {
  return (
    <BrowserRouter>  {/* Wrap your app with BrowserRouter */}
    <ResponsiveAppBar />
      <Routes>
        <Route exact path="/" element={<First />} />
        <Route exact path="/empresarial" element={<Empresarial />} />
        <Route exact path="/productos" element={<First />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
