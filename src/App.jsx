import React from 'react'
import "./Custom.css"
import Nav from './component/Nav'
import Home from './pages/Home'
import GlassmorphismFooter from './component/GlassmorphismFooter'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import AmazonSecondaryNav from './component/AmazonSecondaryNav'
import AmazonFooter from './component/AmazonFooter'
import Register from './Register'


function App() {


 

 

  return (
    <>
   <Router>

   <Nav/>
   <AmazonSecondaryNav/>


    <Routes>
      
      <Route path='/'  element={<Home/>} />
      <Route path='/contact'  element={<Contact/>} />
      <Route path='/about'  element={<About/>} />
       <Route path='/login'  element={<Login/>} />
        <Route path='/register'  element={<Register/>} />
      <Route path='*'  element={<NotFound></NotFound>} />
    


    </Routes>
    
    <AmazonFooter/>
   </Router>
    </>
  )
}

export default App
