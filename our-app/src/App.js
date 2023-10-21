import React from 'react';
import './App.css';
import Header from './component/common/Header';
import { Routes,Route } from 'react-router-dom';
import Footer from './component/common/Footer';
import DownloadLink from './component/common/DownloadLink';
import Body_notice from './component/common/Body_notice';
import Intro from './component/common/Intro';
import Main from './component/common/Main';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/Main" element={<Main/>} />
        <Route path="/notice" element={<Body_notice />} />
        <Route path="/Intro" element={<Intro />} />
      </Routes>
      <DownloadLink/>
      <Footer/>
    </div>
  );
}

export default App;
