import AboutUs from '../pages/AboutUs';
import Home from '../pages/Home';
import React, { Component } from 'react';
import { withRouter, WithRouterProps } from '../HOC/withRouter';
import '../styles/components/Header.css';

interface HeaderState {
  isHomePage: boolean;
}

class Header extends Component<WithRouterProps, HeaderState> {
  constructor(props: WithRouterProps) {
    super(props);
    this.state = {
      isHomePage: this.props.location.pathname === '/',
    };
  }

  componentDidUpdate(prevProps: WithRouterProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        isHomePage: this.props.location.pathname === '/',
      });
    }
  }

  render() {
    const { isHomePage } = this.state;

    return (
      <div className="header">
        <nav className="header-navigation">
          <h2>{isHomePage ? 'Home Page' : 'About Page'}</h2>
          <ul>
            <li>
              <button onClick={() => this.props.navigate('/')}>Home</button>
            </li>
            <li>
              <button onClick={() => this.props.navigate('/about-us')}>About Us</button>
            </li>
          </ul>
        </nav>
        <h1>{isHomePage ? <Home /> : <AboutUs />}</h1>
      </div>
    );
  }
}

export default withRouter(Header);
