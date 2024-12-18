import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import Login from './components/Login';
import Signup from './components/signup';
import Profile from './components/Profile';

const App = () => {
  const [isAuth, setIsAuth] = useState(true);  

  return (
    <Provider store={store}>   
      <Router>
        <div className="App">
          <Routes>
            <Route path="/login" element={!isAuth ? <Login /> : <Navigate to="/signup" />} />
            <Route path="/signup" element={!isAuth ? <Signup /> : <Navigate to="/profile" />} />
            <Route path="/profile" element={isAuth ? <Profile /> : <Navigate to="/login" />} />
            <Route path="/" element={!isAuth ? <Login /> : <Navigate to="/signup" />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;






