import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container-fluid p-0">
      <div className="Dash-body">
        <Sidebar />
        <div className="main-content ">
          <Header />
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default App;
