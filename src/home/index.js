import React from 'react';
import Header from './header';
import Hero from './hero';
import About from './about';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Hero></Hero>
        <About></About>
      </div>
    )
  }
}

export default Home;
