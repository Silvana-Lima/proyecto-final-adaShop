import { Route, Routes } from 'react-router-dom';

import { AppLayout } from './layout/AppLayout';
import { Error404 } from './pages/Error404';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Products } from './pages/Products';
import { RegisterUser } from './pages/RegisterUser';

function App() {
  return (
    <>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AppLayout>
    </>
  );
}

export default App;
