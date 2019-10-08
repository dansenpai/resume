import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/index';
import Sidebar from './components/sidebar';
import About from './components/about';
import Portfolio from './components/portfolio';
import Blog from './components/blog';
import './App.css';
import { memberExpression } from '@babel/types';

function App() {
  return (
    <Router>
      <Sidebar/>
      <div className="main-content">
          <Route path="/" exact component={About} />
          <Route path="/about" exact component={About} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/blog" exact component={Blog} />
      </div>
    </Router>
  );
}

export default App;
