import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Sidebar from './components/sidebar';
import About from './components/about';
import Portfolio from './components/portfolio';
import Blog from './components/blog';
import './App.css';

function App() {
  return (
    <Router>
      <Sidebar/>
      <div className="main-content">
          <Route path='/' render={() => <Redirect to={{pathname: '/portfolio'}} />}/>
          <Route path="/about" exact component={About} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/blog" exact component={Blog} />
      </div>
    </Router>
  );
}

export default App;