import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Creators from './Creators/Creators.jsx'
import Contact from './Contact/Contact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="creators" element={<Creators />} />
      <Route path="contact" element={<Contact />} />

    </Routes>
  </BrowserRouter>
)
