import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CommonLayout from './layout/common.layout'
import CreateCard from './pages/CreateCard'
import CardByTitle from './pages/CardByTitle'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' index element={<CommonLayout><Home /></CommonLayout>} />
        <Route path='/card/:title' element={<CommonLayout><CardByTitle /></CommonLayout>} />
        <Route path='/create-card' element={<CommonLayout><CreateCard /></CommonLayout>} />
      </Routes>
    </>
  )
}

export default App