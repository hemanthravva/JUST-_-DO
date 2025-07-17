import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Corrected path
import Footer from './components/footer/Footer'; // Corrected path
import Home from './components/home/Home'; // Corrected path
import About from './components/about/About'; // Corrected path
import Signup from './components/signup/Signup'; // Corrected path
import Signin from './components/signin/Signin'; // Corrected path
import Todo from './components/todo/Todo'; // Corrected path
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;