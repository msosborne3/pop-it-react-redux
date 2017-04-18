import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from '.NavBar';
//import MoviesPage from '../containers/MoviesPage';
// import ShowsPage from '../containers/ShowsPage';

export default (props) => {
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  )
};