import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routers/Routs';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className=" w-11/12 mx-auto">
      <RouterProvider router={router}></RouterProvider>
      <Toaster/>
    </div>
  );
}

export default App;
