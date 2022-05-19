import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Activate from './components/Activate'
import Available from './components/Available'
import FoodieBuck from './components/FoodieBuck'
import History from './components/History'

function App() {
  return (
    <div className='flex flex-col items-center pt-8 h-screen bg-gray-100'>
      <header>
        <Link to='/'>
          <h1 className='font-bold text-4xl text-green-700 hover:underline'>FoodieBucks</h1>
        </Link>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/available' element={<Available />} />
        <Route path='/activate' element={<Activate />} />
        <Route path='/history' element={<History />}>
          <Route path=':param' element={<FoodieBuck />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
