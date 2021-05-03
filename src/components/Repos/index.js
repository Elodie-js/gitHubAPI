// == Import npm
import React from 'react';
// == Import
import './style.scss';
import PropTypes from 'prop-types'
import { Card } from 'semantic-ui-react'

// == Composant
const Repos = ({ list }) => (
  <div className="repos">
  <Card.Group>
    <Card
    image='https://avatars3.githubusercontent.com/u/698437?v=4'
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'>
    </Card>
   
  </Card.Group>
  </div>
);


Repos.propTypes = {
  list: PropTypes.arrayOf(
    // I want a object with some properties from my list
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      fullName: PropTypes.string.isRequired,
      owner: PropTypes.shape ({
        login: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        
      })
    })
  ).isRequired,

}
// == Export
export default Repos;
