import React from 'react';
import Entries from './Entries';
import './entry.scss';
import {
  Link,
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Statistics from './Statistics';

const EntryPage = () => {
  return (
    <div className="entriesSection">
      <div className="entriesContainer">
        <div className="statsSection">
          <Link to="entry">
            <button>Entry</button>
          </Link>
          <Link to="stats">
            <button>Statistics</button>
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default EntryPage;
