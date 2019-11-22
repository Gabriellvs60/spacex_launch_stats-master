import React from 'react';
import Launches from './components/Launches';
import ApolloClient from 'apollo-boost';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launches';
import {ApolloProvider} from 'react-apollo';
import './App.css';
import { from } from 'zen-observable';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="container">
      <h1>SpaceX</h1>
      <Route exact path="/launch/:flight_number" component={Launches}/>
     </div>
     <Launches/>
      </Router>
    </ApolloProvider>
    
  );
}

export default App;
