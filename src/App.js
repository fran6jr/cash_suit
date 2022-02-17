import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Whoopsie from './pages/Whoopsie';
import About from './pages/About';
import Profile from './pages/Profile';
import Meet from './pages/Meet';
import Signup from './pages/Signup';
import Save from './pages/Save';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import Finance from './pages/Finance';
import Forum from './pages/Forum';
import EditProfile from './pages/EditProfile';
import './App.css';

const App = () => {
  return (
    
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="forum" element={<Forum />} />
        <Route path="login" element={<Login />} />
        <Route path="products" element={<Products />}>
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="profile" element={<Profile />}>
          <Route path="edit" element={<EditProfile />} />
        </Route>
        <Route path="blog" element={<Blog />} />
        <Route path="finance" element={<Finance />}>
          <Route path="savings" element={<Save />} />
        </Route>
        <Route exact path="meet" element={<Meet />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<Whoopsie />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
