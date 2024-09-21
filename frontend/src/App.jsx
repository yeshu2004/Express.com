import React from 'react'
import Layout from './components/Layout'
import { Route,Router,Routes } from 'react-router-dom'
import Post from './components/Post'
import Login from './components/Login'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Post />} />
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App