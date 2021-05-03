import React from 'react'

//import PropTypes from 'prop-types';
import './style.scss';
// we can search directly from src with webpack configuration 
import gitHubImg from 'src/assets/logo-github.png'

// style  + validation with enter touch 
import {Segment, Input} from 'semantic-ui-react';

const Header = () => 
<header className="header">
  <img src={gitHubImg} alt="logo github" className="header__logo" />

{/* if we want to make a search when we click on "enter" we need to use a input in a form */}

<Segment >
  <form className="header__form"> 
    <Input 
    fluid 
    icon="search"
    iconPosition="left" 
    className="header__input"
    placeholder="recherchez un repo" />
  </form>
</Segment>

</header>

export default Header; 
