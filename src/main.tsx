import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './global'

import Homepage from './pages/Homepage/Homepage'
import CardDetails from './pages/CardDetails/CardDetailsPage'
import SearchPage from './pages/SearchPage/SearchPage'
import FavoriteTitlePage from './pages/FavoriteTitlePage/FavoriteTitlePage'

import { FavoriteListProvider } from './context/favoriteList'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FavoriteListProvider>
      <BrowserRouter>  
        <GlobalStyle />  
        <Routes>      
          <Route path='/' element={<Homepage />} />
          <Route path='cardDetails/:id' element={<CardDetails />} />
          <Route path="/search" element={<SearchPage />} /> 
          <Route path="/favorite" element={<FavoriteTitlePage />} /> 
        </Routes>
      </BrowserRouter>
    </FavoriteListProvider>
  </React.StrictMode>
)
