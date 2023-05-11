import { Route, Routes } from 'react-router-dom';

import { AppLayout } from './layout/AppLayout';
import { Error404 } from './pages/Error404';
import { Home } from './pages/Home';
import { Products } from './pages/Products';

function App() {
  return (
    <>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AppLayout>
    </>
  );
}

export default App;
