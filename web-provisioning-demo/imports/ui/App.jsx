import React from 'react';
import {
  Routes,
  Route,
  useSearchParams,
  BrowserRouter
} from "react-router-dom"
import Home from './Home.jsx';
import RedirectToWallet from './RedirectToWallet.jsx';

export const App = () =>
  (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addtowallet" element={<RedirectToWallet />} />

      </Routes>
    </BrowserRouter>
  )

