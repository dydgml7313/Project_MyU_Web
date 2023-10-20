import React from 'react';
import './App.css';
import Header from './component/common/Header';
import { Routes,Route } from 'react-router-dom';
import Footer from './component/common/Footer';
import Test from './component/common/Test';
import Asd from './component/common/Asd';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/login" element={<Asd />} />
    </Routes>
        <Footer/>
    </div>
  );
}

export default App;
