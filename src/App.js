import React from 'react';
import pages from './pages';
import './App.css';
import 'antd/dist/antd.css';
import './assets/css/main.css'
import { BrowserRouter as Router , Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route path="/" exact component={pages.Register} />
          <Route path="/classroom" exact component={pages.Classroom} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
