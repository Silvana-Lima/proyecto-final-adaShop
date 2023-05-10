import { Route, Routes } from 'react-router-dom';

import { AppLayout } from './layout/AppLayout';
import { Error404 } from './pages/Error404';
import { Home } from './pages/Home';

function App() {
  return (
    <>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AppLayout>
    </>
  );
}

export default App;
