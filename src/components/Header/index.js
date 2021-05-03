import React from 'react'

import PropTypes from 'prop-types';
import './style.scss';
// we can search directly from src with webpack configuration 
import gitHubImg from 'src/assets/logo-github.png'

// style  + validation with enter touch 
import {Segment, Input} from 'semantic-ui-react';
// inputValue : le texte que je veux afficher 
// onInputChange: fonction pour ecouter le change / a executer lors du changement
// onFormSubmit au submit je dois executer la fonction 
//  
const Header = ( {inputValue, onInputChange, onFormSubmit  }) =>  (
<header className="header">
  <img src={gitHubImg} alt="logo github" className="header__logo" />

{/* if we want to make a search when we click on "enter" we need to use a input in a form */}

<Segment >
  <form className="header__form"
  onSubmit={(evt) => {
    // Dont reload the page
    evt.preventDefault();
    onFormSubmit();
  }}> 
    <Input 
    fluid 
    icon="search"
    iconPosition="left" 
    className="header__input"
    placeholder="recherchez un repo"
    value={inputValue}
    // onChange, i take the event 
    onChange={(evt) => {
    const text = evt.target.value;
    onInputChange(text); 
    }} />
  </form>
</Segment>

</header>

);

Header.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};


export default Header; 
