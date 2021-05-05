

// import axios
import axios from 'axios';
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

const BASE_URL = 'https://api.github.com/search/repositories?q='
// == Composant
const App = () => {

  const [loading, setLoading] = useState(false)

  // state for stock up my list 
  const [repos, setRepos] = useState(data.items);

  // i want to have in sotkc my input, and i want the "method" to change him.
  const [inputText, setInputText] = useState('');

  // i want to change this input text 
  const handleInputChange = (textSaisi) => {
    setInputText(textSaisi);
  };  
  
  // when i Submit 
  const handleFormSubmit= () => {
  setLoading(true);
  //made my request 
  axios ({
    method: 'get',
    url: `${BASE_URL}${inputText}`,
  })
  //if it's working, had repos on state
  .then((res) => {
    // axios send me the server response in res.data 
    //console.log(res.data)
    // i put the repos in the state 
    setRepos(res.data.items);
  })
  // if not, send a error message 
    .catch((err) => {
    console.trace(err);
  })

  .finally(() => {
    setLoading(false);
  })
  };


return (
  <div className="app">
  <Header
  loading={loading}
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
