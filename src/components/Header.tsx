import React, { Component } from 'react';
import { withRouter, WithRouterProps } from '../HOC/withRouter';
import '../styles/components/Header.css';
import { Outlet } from 'react-router-dom';

interface HeaderState {
  isHomePage: boolean;
}

class Header extends Component<WithRouterProps, HeaderState> {
  constructor(props: WithRouterProps) {
    super(props);
    this.state = {
      isHomePage: location.pathname === '/',
    };
  }

  componentDidUpdate(prevProps: WithRouterProps) {
    if (prevProps.location.pathname !== location.pathname) {
      this.setState({
        isHomePage: location.pathname === '/',
      });
    }
  }

  render() {
    const { isHomePage } = this.state;
    const { location, navigate } = this.props;

    return (
      <div className="header">
        <nav className="header-navigation">
          <h2>{isHomePage ? 'Home Page' : location.pathname}</h2>
          <ul>
            <li>
              <button onClick={() => navigate('/')}>Home</button>
            </li>
            <li>
              <button onClick={() => navigate('/about-us')}>About Us</button>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    );
  }
}

export default withRouter(Header);
