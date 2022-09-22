import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Index from './pages/Index'

import Bookmarks from './components/Bookmarks';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="swipe-me-baby">
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
        </Routes>
      </Router>
      <Bookmarks />
      <Footer />
    </div>
  );
}

export default App;
