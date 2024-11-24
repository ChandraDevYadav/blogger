import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from 'react-router-dom'
import Home1 from './Pages/Home/Home'
import Home2 from './Pages/Home2/Home2'
import Home3 from './Pages/Home3/Home3'
import About from './Pages/About/About'
import Blog from './Pages/Blog/Blog'
import Bussiness from './Pages/Bussiness/Bussiness'
import Foods from './Pages/Foods/Foods'
import LifeStyle from './Pages/LifeStyle/LifeStyle'
import Posts from './Pages/Posts/Posts'
import Travel from './Pages/Travel/Travel'
import Cart from './Pages/Cart/Cart'
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home1 />} />
        <Route path='/home' element={<Home1 />} />
        <Route path='/home2' element={<Home2 />} />
        <Route path='/home3' element={<Home3 />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/bussiness' element={<Bussiness />} />
        <Route path='/foods' element={<Foods />} />
        <Route path='/lifestyle' element={<LifeStyle />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/travel' element={<Travel />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default App
