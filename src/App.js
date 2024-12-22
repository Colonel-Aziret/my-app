import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import StudentDashboard from './pages/StudentDashboard';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Добро пожаловать в Платформу для студентов!</h1>} />
        <Route path="/schedule" element={<StudentDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
