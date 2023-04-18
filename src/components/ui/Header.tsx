import '../../styles/components/Header.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let currentLocation;
  if (location.pathname === '/') {
    currentLocation = 'Home Page';
  } else if (location.pathname === '/about-us') {
    currentLocation = 'About us';
  } else {
    currentLocation = 'Survey';
  }
  return (
    <div className="header" data-testid="header">
      <nav className="header-navigation">
        <h2>{currentLocation}</h2>
        <ul>
          <li>
            <button onClick={() => navigate('/')}>Home</button>
          </li>
          <li>
            <button onClick={() => navigate('/about-us')}>About Us</button>
          </li>
          <li>
            <button onClick={() => navigate('/survey')}>Survey</button>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Header;
