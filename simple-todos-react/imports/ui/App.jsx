import React from 'react';
import {
  Routes,
  Route,
  useSearchParams,
  BrowserRouter
} from "react-router-dom"
import Home from './Home.jsx';

export const App = () =>
  (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )

