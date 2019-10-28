// Absolute imports
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Card from '../../../Components/Card';

// Helpers
import { UserTypes } from '../../../Helpers';

// Styled
import { Wrapper } from './styled';

const UsersList = ({ isLoading, data, isError }) => {
  if (isLoading) {
    return 'Loading...';
  }

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
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default UsersList;
