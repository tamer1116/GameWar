import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Creators from './Creators/Creators.jsx'
import Contact from './Contact/Contact.jsx'
import Games from './Games/Games.jsx'
import Publishers from './Publishers/Publishers.jsx'
import GamesDetail from './Games/GamesDetail.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="creators" element={<Creators />} />
      <Route path="contact" element={<Contact />} />
      <Route path="games" element={<Games />} />
      <Route path="publishers" element={<Publishers />} />
      <Route path="/gamesdetails/:id" element={<GamesDetail />} />



    </Routes>
  </BrowserRouter>
)
