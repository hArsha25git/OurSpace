import React from 'react'
import Navbar from './components/navbar/navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Help from './components/help/Help.jsx';
import ContactUs from './components/contactus/ContactUs';
import FeedbackMain from './components/feedback/FeedbackMain';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Discussion from './components/discussion/Discussion';
import Discussions from './components/discussion/Discussions';
import AddDiscussion from './components/discussion/AddDiscussion';
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/help' element={<Help/>}/>
      <Route path='/feedback' element={<FeedbackMain/>}/>
      <Route path='/about' element={<ContactUs/>}/>
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/Discussion/:id" element={<Discussion/>}/>
      <Route
            path="/forum"
            element={
              <div className="row mt-5">
                <div className="col-md-8">
                  <Discussions />
                </div>
                <div className="col-md-4">
                  <AddDiscussion />
                </div>
              </div>
            }
       />
    </Routes>
    </>
    )
  }

export default App

