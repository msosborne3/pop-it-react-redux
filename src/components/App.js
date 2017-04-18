import React from 'react';
import './App.css';
import NavBar from './NavBar';
//import MoviesPage from '../containers/MoviesPage';
//import ShowsPage from '../containers/ShowsPage';

const App =  (props) => {
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  );
};

export default App;