import React from 'react';
import Sidebar from './component/Sidebar';
import Navbar from './component/Navbar';
import Table from './component/Table';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import AddNewPosition from './Pages/AddNewPosition';
import ListPosition from './Pages/ListPosition';
import AddNewTeacher from './Pages/AddNewTeacher';
import ListTeacher from './Pages/ListTeacher';

export const url = 'http://localhost:8080'


function App() {
  return (
    <div className="flex">
      <ToastContainer />
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div>
          <Routes>
            <Route path='/list-teacher' element={<ListTeacher />}></Route>
            <Route path='/add-teacher' element={<AddNewTeacher />}></Route>
            <Route path='/list-position' element={<ListPosition />}></Route>
            <Route path='/add-position' element={<AddNewPosition />}></Route>
          </Routes>
        </div>
        <div className="p-6">
         
         
        </div>
      </div>
    </div>
  );
}

export default App;
