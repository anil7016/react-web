import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/products/Home";
import { BrowserRouter as Router, Route,Routes} from "react-router-dom"
import AddProduct from './components/products/AddProduct';
import EditProduct from './components/products/EditProduct';
import Footer from './components/layout/Footer';
import About from './components/layout/About';


function App(props) {
  return (
    <Router>
      <div className="App d-flex flex-column min-vh-100">
        <Navbar />
          <Routes>
            <Route exact="true" path="/" element={<Home/>}/>
            <Route exact="true" path="/about" element={<About/>}/>
            <Route exact="true" path="/products/add" element={<AddProduct/>} />
            <Route exact="true" path="/products/edit/:id" element={<EditProduct/>} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
