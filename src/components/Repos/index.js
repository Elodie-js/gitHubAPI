// == Import npm
import React from 'react';
// == Import
import './style.scss';
import PropTypes from 'prop-types'
import { Card } from 'semantic-ui-react'

// import of my DATA

// == Composant
// list = my data 
const Repos = ({ list }) => (
  <div className="repos">
  <Card.Group className="repos__card">
    {
      // i made a map, and for each "repoObj" (each things) i want image, header, etc
      list.map((repoObj) => (
        <Card
        // on One repoObj, who represente one card, i want for the image "avatar_url" who is from my data
        key={repoObj.id}
        image={repoObj.owner.avatar_url}
        header={repoObj.name}
        meta={repoObj.owner.login}
        // if they have a description if not ''
        description={repoObj.description ? repoObj.description : ''}>
        </Card>
      ))
    }

   
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
     // fullName: PropTypes.string.isRequired,
      owner: PropTypes.shape ({
        login: PropTypes.string,
        avatar_url: PropTypes.string,

      }),
    }),
  ).isRequired,

}
// == Export
export default Repos;
