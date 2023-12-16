
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductCard from './components/ProductCard';
import Register from './components/Register';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import Gallery from './components/Gallery';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productCard" element={<ProductCard />} />
        <Route path="/registro" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/crear-publicacion" component={CreatePost} />
        <Route path="/galeria" component={Gallery} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
