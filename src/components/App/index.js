// == Import npm
import React from 'react';
// using message from semantic ui 
import { Message } from 'semantic-ui-react';
// import of semantic ui for CSS 
import 'semantic-ui-css/semantic.min.css'

// == Import of style and my component 
import './styles.css';
import Header from '../Header';
import Repos from '../Repos';

// == Composant
const App = () => (
  <div className="app">
  <Header /> 
  <Message content="Je suis un message" />
  <Repos /> 
  </div>
);

// == Export
export default App;
