import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => (
  <aside className="sidebar">
    <h2>Topics</h2>
    <ul>
      <li><Link to="/r/technology">Technology</Link></li>
      <li><Link to="/r/gaming">Gaming</Link></li>
      <li><Link to="/r/movies">Movies</Link></li>
      <li><Link to="/r/music">Music</Link></li>
    </ul>
  </aside>
);

export default Sidebar;


