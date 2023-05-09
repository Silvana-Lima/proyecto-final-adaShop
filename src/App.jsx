import { Route, Routes } from 'react-router-dom';

import { AppLayout } from './layout/AppLayout';
import { Error404 } from './pages/Error404';

function App() {
  return (
    <>
      <AppLayout>
        <Routes>
          <Route path="/" element={<p>inicio</p>} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AppLayout>
    </>
  );
}

export default App;
