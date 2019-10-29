// Absolute imports
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Card from '../../../Components/Card';
import Loader from '../../../Components/Loader';

// Helpers
import { UserTypes } from '../../../Helpers';

// Styled
import { Wrapper } from './styled';

const UsersList = ({ data, isError }) => {
  return (
    <Wrapper>
      {data.map(user => (
        <Card key={user.id} user={user} />
      ))}
    </Wrapper>
  );
};

UsersList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(UserTypes)).isRequired,
  isError: PropTypes.bool.isRequired,
};

export default UsersList;
