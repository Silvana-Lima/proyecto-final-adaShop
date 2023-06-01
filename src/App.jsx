import { Flex, Image, Spinner } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { ProtectedRoute } from './components/ProtectedRoute';
import { userContext } from './context/UserContext';
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

function App() {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const { loadingUser } = useContext(userContext);

  const handleIsCheckingOut = () => {
    setIsCheckingOut(true);
  };

  return (
    <>
      {loadingUser && (
        <Flex
          justify={'center'}
          align={'center'}
          direction={'column'}
          minH={'100vh'}
        >
          <Spinner size="lg" mb={5} />
          <Image src="/AdaShopLogo.png" h={['60px', '100px']} />
        </Flex>
      )}
      {!loadingUser && (
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
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="*" element={<Error404 />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/my-account" element={<MyAccount />}>
                <Route path="orders" element={<Orders />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
