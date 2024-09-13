import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HackathonList from './components/HackathonList';
import HackathonForm from './components/HackathonForm';
import HackathonDetails from './components/HackathonDetails';
import Participate from './components/Participate';
import Navbar from './Navbar/Navbar';
import EditForm from './components/EditForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HackathonList />} />
        <Route path="/create" element={<HackathonForm />} />
        <Route path="/edit/:id" element={<HackathonForm />} />
        <Route path="/hackathon/:id" element={<HackathonDetails />} />
        <Route path="/participate/:id" element={<Participate />} /> 
        <Route path="/editform/:id" element={<EditForm />} />
      </Routes>
    </Router>
  );
}

export default App;
