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


function App() {


 

 

  return (
    <>
   <Router>

   <Nav/>

    <Routes>
      
      <Route path='/'  element={<Home/>} />
      <Route path='/contact'  element={<Contact/>} />
      <Route path='/about'  element={<About/>} />
       <Route path='/login'  element={<Login/>} />
      <Route path='*'  element={<NotFound></NotFound>} />
    


    </Routes>
    
    <GlassmorphismFooter/>
   </Router>
    </>
  )
}

export default App
