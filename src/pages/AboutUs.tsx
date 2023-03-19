import React, { Component } from 'react';

interface AboutUsProps {}

interface AboutUsState {}

class AboutUs extends Component<AboutUsProps, AboutUsState> {
  render() {
    return (
      <div>
        <h1>About Us</h1>
        <p>Here we publish cute animals</p>
      </div>
    );
  }
}
export default AboutUs;
