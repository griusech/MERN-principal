import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './components/Nav';

import CreateUser from './components/CreateUser';
import NoteList from './components/NoteList';

function App() {
  return (
    <>
    <Router>
      
      <Nav />
    <div className="container">
      <Route path="/" exact component={NoteList} />
      <Route path="/edit/:id" exact component={CreateUser} />
      <Route path="/user" exact component={CreateUser} />
    </div>    
    </Router>

    </>
  );
}

export default App;
