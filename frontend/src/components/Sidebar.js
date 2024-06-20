import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { IoIosRocket } from 'react-icons/io';
import { GrTechnology } from 'react-icons/gr';
import { CgGames } from 'react-icons/cg';
import { BiSolidMoviePlay } from 'react-icons/bi';
import { HiMusicNote } from 'react-icons/hi';

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <div style={styles.section}>
        <div style={styles.topic}>
          <IoHomeOutline style={styles.icon} />
          <span>Home</span>
        </div>
        <div style={styles.topic}>
          <IoIosRocket style={styles.icon} />
          <span>Popular</span>
        </div>
      </div>
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Topics</h2>
        <div style={styles.topic}>
          <GrTechnology style={styles.icon} />
          <span>Technology</span>
        </div>
        <div style={styles.topic}>
          <CgGames style={styles.icon} />
          <span>Gaming</span>
        </div>
        <div style={styles.topic}>
          <BiSolidMoviePlay style={styles.icon} />
          <span>Movies</span>
        </div>
        <div style={styles.topic}>
          <HiMusicNote style={styles.icon} />
          <span>Music</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    backgroundColor: '#333',
    padding: '20px',
    width: '250px',
    minHeight: '100vh',
  },
  section: {
    marginBottom: '30px',
  },
  sectionTitle: {
    color: '#ff4500',
    marginBottom: '10px',
  },
  topic: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    color: '#fff',
  },
  icon: {
    marginRight: '10px',
  },
};

export default Sidebar;
