import React from 'react';
import './App.css';
import ChatBox from './components/chat/ChatBox';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard.js/Dashboard';
import Profile from './components/Profile/Profile';
import Analytics from './components/Analytics/Analytics';
//import redux components
import { Provider } from 'react-redux';
import store from './Redux/store';
//import chat component

//connect app to redux
function App() {
  return (

     <>
     <div className='app'>
     <Sidebar/>

<Routes>
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/profile' element={<Profile/>} />
    <Route path='/analytics' element={<Analytics/>} />
  </Routes>
  <ChatBox></ChatBox>
     </div>
       



    </>

  );
}

export default App;
