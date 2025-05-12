import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home.page';
import { NotFoundPage } from './pages/not-found/not-found.page';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} /> {/** Root route */}
          <Route path="*" element={<NotFoundPage />} /> {/** Invalid Route */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
