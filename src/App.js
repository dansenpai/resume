import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Portfolio from './screens/portfolio/portfolio';
import Home from './screens/home/home';
import './App.css';

function App() {
  return (
    <Router>
      <Route path='/' exact render={() => <Redirect to={{pathname: '/home'}} />}/>
      <Route path="/home" exact component={Home} />
      <Route path="/portfolio" exact component={Portfolio} />
    </Router>
  );
}

export default App;