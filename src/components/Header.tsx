import React, { Component } from 'react';
import { withRouter, WithRouterProps } from '../HOC/withRouter';

interface HeaderProps extends WithRouterProps {}

interface HeaderState {
  isHomePage: boolean;
}

class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      isHomePage: this.props.location.pathname === '/',
    };
  }

  componentDidUpdate(prevProps: HeaderProps) {
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
        <nav>
          <ul>
            <li>
              <button onClick={() => this.props.navigate('/')}>Home</button>
            </li>
            <li>
              <button onClick={() => this.props.navigate('/about-us')}>About Us</button>
            </li>
          </ul>
        </nav>
        <h1>{isHomePage ? 'Home Page' : 'About Us Page'}</h1>
      </div>
    );
  }
}

export default withRouter(Header);
