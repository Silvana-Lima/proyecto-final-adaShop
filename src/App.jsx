import { Route, Routes } from 'react-router-dom';

import { AppLayout } from './layout/AppLayout';
import { RegisterUser } from './pages/auth/RegisterUser';
import { Error404 } from './pages/Error404';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { ProductDetails } from './pages/ProductDetails';
import { Products } from './pages/Products';

function App() {
  return (
    <>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/details" element={<ProductDetails />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AppLayout>
    </>
  );
}

export default App;
