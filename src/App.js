import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './home';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Home} />
      </Router>
    </div>
  );
}

export default App;
