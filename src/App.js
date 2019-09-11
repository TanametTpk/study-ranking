import React from 'react';
import pages from './pages';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={pages.Register} />
        <Route path="/classroom" exact component={pages.Classroom} />
        <Route path="/classroom/scoreboard" component={pages.Scoreboard} />
      </Router>
    </div>
  );
}

export default App;
