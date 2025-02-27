// Absolute imports
import React from 'react';
import PropTypes from 'prop-types';

// Helpers
import { UserTypes } from '../../Helpers';

// Components
import Button from '../Button';

// Styled
import { Wrapper } from './styled';

const Card = ({ user }) => {
  return (
    <Wrapper className="Card">
      <p>{user.name}</p>
      <p>
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </p>
      <p>
        <a href={`tel:${user.phone}`}>{user.phone}</a>
      </p>
      <p>
        <a href={user.website}>{user.website}</a>
      </p>
      <Button as="a" href={`/user/${user.id}`} type="primary" ghost>
        Details
      </Button>
    </Wrapper>
  );
};

Card.propTypes = {
  user: PropTypes.shape(UserTypes).isRequired,
};

export default Card;
