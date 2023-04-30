import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/404';
import Header from './components/ui/Header';
import Survey from './pages/Survey';

import '../src/styles/components/Header.css';
import '../src/styles/components/Search.css';
import '../src/styles/pages/Home.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="survey" element={<Survey />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
