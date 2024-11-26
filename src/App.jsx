import React from 'react'
import Sidebar from './components/sidebar'
import MainContent from './components/MainContent'

import './styles/components/app.sass'

function App() {
  return (
    <div id='portifolio'>
      <h1>Rayssa Silva</h1>

      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App

