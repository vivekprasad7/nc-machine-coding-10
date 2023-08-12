import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Details } from './pages/details/Details';
import { Home } from './pages/home/Home';
import { Products } from './pages/products/Products';
import { Departments } from './pages/departments/Departments';
import { NewProduct } from './pages/newProduct/NewProduct';

function App() {
  return (
    <div className="App">





      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/departments" element={<Departments/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/new-product" element={<NewProduct/>}/>
        <Route path="/details/:pID" element={<Details/>}/>
      </Routes>
      
     
    </div>
  );
}

export default App;
