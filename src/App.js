import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header, Footer } from './components'
import { Home, Contact, Login, Register, Reset,Admin  } from './pages'
import AdminOnlyRoute from './components/adminRouter/adminRouter'
import ProductDetails from "./components/products/productsDetails/ProductsDetails";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<Reset />} />
        <Route path='/admin/*' element={ <AdminOnlyRoute><Admin /></AdminOnlyRoute>} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
