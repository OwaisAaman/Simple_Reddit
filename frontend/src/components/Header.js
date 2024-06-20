import React from 'react';
import { Link } from 'react-router-dom';
import { FaReddit } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <FaReddit style={styles.logoIcon} />
        <h1 style={styles.title}>reddit</h1>
      </div>
      <div style={styles.searchContainer}>
        <FiSearch style={styles.searchIcon} />
        <input type="text" placeholder="Search" style={styles.searchInput} />
      </div>
      <nav>
        <Link to="/profile" style={styles.link}>Profile</Link>
        <Link to="/login" style={styles.link}>Login</Link>
        <Link to="/signup" style={styles.link}>Signup</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logoIcon: {
    color: '#ff4500',
    fontSize: '2rem',
  },
  title: {
    color: '#ff4500',
    marginLeft: '10px',
  },
  link: {
    color: '#fff',
    marginLeft: '20px',
    textDecoration: 'none',
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#444',
    padding: '5px 10px',
    borderRadius: '20px',
  },
  searchIcon: {
    color: '#fff',
    fontSize: '1.2rem',
  },
  searchInput: {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    color: '#fff',
    marginLeft: '5px',
  },
};

export default Header;
