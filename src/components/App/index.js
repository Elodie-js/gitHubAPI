// == Import npm
import React from 'react';
// using message from semantic ui 
import { Message } from 'semantic-ui-react';
// import of semantic ui for CSS 
import 'semantic-ui-css/semantic.min.css'

// == Import of style and my component 
import './styles.scss';
import Header from '../Header';
import Repos from '../Repos';
//import my data 
import data from 'src/data/repos'

// == Composant
const App = () => (
  <div className="app">
  <Header
  inputValue="mon texte"
  onInputChange={() => {}}
  onFormSubmit={() => {}} /> 
  <Message content="Je suis un message" />
  {/* My repos need my data, and they need items from the data file */}
  <Repos list={data.items} /> 
  </div>
);

// == Export
export default App;
