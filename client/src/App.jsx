import React from 'react';
import { Routes, Route, useLocation  } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Notes from './Pages/Notes';
import Login from './components/Login';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import { useNotesAppContext } from './context/NotesAppContextProvider';
import MyNotes from './components/MyNotes';

function App() {
  const { showUserLogin } = useNotesAppContext();
  
  return (
    <div className="min-h-screen bg-[#FFDBDB]">
      {/* Render Navbar always */}
      <Navbar />
      {/* Show Login modal or page if showUserLogin is true */}
      {showUserLogin && <Login />}
      
      <Toaster />
      
      <div className="px-6 md:px-16 lg:px-24 xl:px-32">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/my-notes" element={<MyNotes />} />
        </Routes>
      </div>
      
      {/* Render Footer always */}
      <Footer />
    </div>
  );
}

export default App;

