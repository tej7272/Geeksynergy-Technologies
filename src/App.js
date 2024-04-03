import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/auth/Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/auth/PrivateRoute';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Nav from './components/navbar/Nav';
import Info from './components/compony-info/Info';

function App() {
  return (
    <div className="App">
      <Router>
        <ToastContainer position="top-center" />
        <Nav />
        <Routes>

          <Route exact element={<PrivateRoute />}>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/info' element={<Info />} />
          </Route>

          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
