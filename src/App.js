import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/404';
import Header from './components/ui/Header';
import Survey from './pages/Survey';
import './styles/index.css';
function App() {
    return (_jsx(BrowserRouter, { children: _jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(Header, {}), children: [_jsx(Route, { index: true, element: _jsx(Home, {}) }), _jsx(Route, { path: "about-us", element: _jsx(AboutUs, {}) }), _jsx(Route, { path: "survey", element: _jsx(Survey, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }) }) }));
}
export default App;
