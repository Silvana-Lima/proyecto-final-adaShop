import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ProtectedRoute } from './components/ProtectedRoute';
import { AppLayout } from './layout/AppLayout';
import { LoginLayout } from './layout/LoginLayout';
import { Login } from './pages/auth/Login';
import { Checkout } from './pages/Checkout';
import { Error404 } from './pages/Error404';
import { Home } from './pages/Home';
import { MyAccount } from './pages/MyAccount';
import { Orders } from './pages/Orders';
import { ProductDetails } from './pages/ProductDetails';
import { ProductsPage } from './pages/ProductsPage';
import { getproducts } from './services/products';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getproducts();

        setAllProducts(data);
      } catch {
        console.log('error');
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const handleIsCheckingOut = () => {
    setIsCheckingOut(true);
  };

  return (
    <>
      <Routes>
        <Route element={<LoginLayout />}>
          <Route
            path="/login"
            element={<Login isCheckingOut={isCheckingOut} />}
          />
        </Route>

        <Route
          element={<AppLayout handleIsCheckingOut={handleIsCheckingOut} />}
        >
          <Route
            path="/"
            element={<Home allProducts={allProducts} loading={loading} />}
          />
          <Route
            path="/products"
            element={
              <ProductsPage allProducts={allProducts} loading={loading} />
            }
          />
          <Route
            path="/products/:id"
            element={<ProductDetails allProducts={allProducts} />}
          />
          <Route path="*" element={<Error404 />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/my-account" element={<MyAccount />}>
              <Route path="orders" element={<Orders />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
