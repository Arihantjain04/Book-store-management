import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ShowAllBooks from './pages/ShowAllBooks'
import CreateOneBook from './pages/CreateOneBook'
import EditOneBook from './pages/EditOneBook'
import ShowOneBook from './pages/ShowOneBook'
import DeleteOneBook from './pages/DeleteOneBook'
import BackButton from "./components/Backbutton";

const App = () => {
  return (
    <>
    <BackButton destination='/books' />
      <Routes>
        <Route path='/books' element={<ShowAllBooks/>} />
        <Route path='/books/create' element={<CreateOneBook/>} />
        <Route path='/books/details/:id' element={<ShowOneBook/>} />
        <Route path='/books/edit/:id' element={<EditOneBook/>} />
        <Route path='/books/delete/:id' element={<DeleteOneBook/>} />
      </Routes>
    </>
  )
}

export default App
