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
        <Route path="/rooms" exact component={pages.Room} />
        <Route path="/rooms/:id" exact component={pages.Classroom} />
        <Route path="/rooms/:id/scoreboard" component={pages.Scoreboard} />
      </Router>
    </div>
  );
}

export default App;
