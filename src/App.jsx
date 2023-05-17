import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { AppLayout } from './layout/AppLayout';
import { LoginLayout } from './layout/LoginLayout';
import { RegisterUser } from './pages/auth/RegisterUser';
import { Error404 } from './pages/Error404';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { ProductDetails } from './pages/ProductDetails';
import { ProductsPage } from './pages/ProductsPage';
import { getproducts } from './services/products';

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <Routes>
        <Route element={<LoginLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterUser />} />
        </Route>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home allProducts={allProducts} />} />
          <Route
            path="/products"
            element={
              <ProductsPage allProducts={allProducts} loading={loading} />
            }
          />
          <Route path="/details" element={<ProductDetails />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
