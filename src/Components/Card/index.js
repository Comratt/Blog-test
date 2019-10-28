// Absolute imports
import React from 'react';
import PropTypes from 'prop-types';

// Helpers
import { UserTypes } from '../../Helpers';

// Components
import Button from '../Button';

// Styled
import { Wrapper, Contacts } from './styled';

const Card = ({ user }) => {
  return (
    <Wrapper className="Card">
      <p>{user.name}</p>
      <Contacts>
        <a href={`mailto:${user.email}`}>{user.email}</a>
        <a href={`tel:${user.phone}`}>{user.phone}</a>
        <a href={user.website}>{user.website}</a>
      </Contacts>
      <Button as="a" href={`/user/${user.id}`}>
        Details
      </Button>
    </Wrapper>
  );
};

Card.propTypes = {
  user: PropTypes.shape(UserTypes).isRequired,
};

export default Card;
