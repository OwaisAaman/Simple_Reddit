import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (
    <Router>
      <div style={styles.app}>
        <Header />
        <div style={styles.mainContent}>
          <Sidebar />
          <div style={styles.pageContent}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
  },
  mainContent: {
    display: 'flex',
  },
  pageContent: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#222',
    color: '#fff',
    minHeight: '100vh',
  },
};

export default App;






