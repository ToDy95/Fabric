import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import HomePageComponent from './pages/HomePageComponent';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement);

root.render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePageComponent />} />
    </Routes>
  </BrowserRouter>
  );

