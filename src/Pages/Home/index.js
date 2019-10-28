// Absolute imports
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

// Components
import UsersList from './UsersList';

// Actions
import { fetchUsers } from '../../Store/users/actions';

const Home = ({ loadUsers, usersList, isError, isLoading }) => {
  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <UsersList isLoading={isLoading} isError={isError} data={usersList} />
    </div>
  );
};

const mapStateToProps = state => ({
  usersList: state.users.data,
  isLoading: state.users.isLoading,
  isError: state.users.isError,
});

const mapDispatchToProps = {
  loadUsers: fetchUsers,
};

Home.propTypes = {
  loadUsers: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
