import { Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import About from './pages/About';
import Housing from './pages/Housing';
import Error from './pages/Error';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/housing/:id" element={<Housing />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default Router;
