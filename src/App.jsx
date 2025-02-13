import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from './component/Layout/UserLayout';
import Home from './pages/Home';
import { Toaster } from 'sonner';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CollectionPage from './pages/CollectionPage';
import ProductDetails from './component/Products/ProductDetails';
import Checkout from './component/Cart/Checkout';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import MyOrderPage from './pages/MyOrderPage';
import AdminLayout from './component/Admin/AdminLayout';
import AdminHomePage from './pages/AdminHomePage';
import UserManagement from './component/Admin/UserManagement';
import ProductManagement from './component/Admin/ProductManagement';
import EditProduct from './component/Admin/EditProduct';
import OrderManagement from './component/Admin/OrderManagement';
import AddProduct from './component/Admin/AddProduct';

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='profile' element={<Profile />} />
          <Route path='collections/:collection' element={<CollectionPage />} />
          <Route path='product/:id' element={<ProductDetails />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='order-confirmation' element={<OrderConfirmationPage />} />
          <Route path='order/:id' element={<OrderDetailsPage />} />
          <Route path='my-orders' element={<MyOrderPage />} />
        </Route>

        <Route path='/admin' element={<AdminLayout />}>
          {/* Admin Access */}
          <Route index element={<AdminHomePage />} />
          <Route path='users' element={<UserManagement />} />
          <Route path='products' element={<ProductManagement />} />
          <Route path='products/:id/edit' element={<EditProduct />} />
          <Route path='orders' element={<OrderManagement />} />
          <Route path='product/add' element={<AddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App