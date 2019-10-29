// Absolute imports
import React from 'react';
import PropTypes from 'prop-types';

// Components
import Button from '../Button';
import BackButton from '../BackButton';

// Helpers
import { UserTypes } from '../../Helpers';

// Styled
import { Wrapper, Title } from './styled';

const Header = ({ history, userInfo, hasAddButton, actionHandler }) => {
  return (
    <Wrapper>
      <BackButton history={history} />
      <Title>{userInfo.name}</Title>
      {hasAddButton && <Button onClick={actionHandler}>Add</Button>}
    </Wrapper>
  );
};

Header.propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
  userInfo: PropTypes.shape(UserTypes),
  hasAddButton: PropTypes.bool,
  actionHandler: PropTypes.func.isRequired,
};

Header.defaultProps = {
  userInfo: { name: '' },
  hasAddButton: false,
};

export default Header;
