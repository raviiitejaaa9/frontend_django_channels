import logo from './logo.svg';
import './App.css';
import Registration from './Components/Registration';
import Login from './Components/Login'; // Make sure the import is correct (case-sensitive)
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './Components/NotFound';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" component={Login} />
      <Route exact path="/registration" component={Registration} />
      <Route component={NotFound}/>
    </Routes>
  </BrowserRouter>
);

export default App;