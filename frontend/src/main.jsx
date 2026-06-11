import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Homepage from '../pages/Homepage.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import Login from '../components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    <Routes>
    <Route path = '/' element = {<App/>}/>
    <Route path = 'Home' element = {<Homepage/>}/>
    <Route path = 'Dashboard' element = {<Dashboard/>}/>
    </Routes>
  </StrictMode>
  </BrowserRouter>
)
