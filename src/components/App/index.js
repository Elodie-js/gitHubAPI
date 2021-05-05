// == Import npm
import React, {useState } from 'react';
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
const App = () => {

  // state for stock up my list 
  const [repos, setRepos] = useState([data.items]);

  // i want to have in sotkc my input, and i want the "method" to change him.
  const [inputText, setInputText] = useState('');

  // i want to change this input text 
  const handleInputChange = (textSaisi) => {
    setInputText(textSaisi);
  };  
  
  // when i Submit 
  const handleFormSubmit= () => 
  {}; 




return (
  <div className="app">
  <Header
  inputValue={inputText}
  onInputChange={handleInputChange}
  onFormSubmit={handleFormSubmit}/> 
  <Message content="Je suis un message" />
  {/* My repos need my data, and they need items from the data file */}
  <Repos list={repos} /> 
  </div>
);

}

// == Export
export default App;
