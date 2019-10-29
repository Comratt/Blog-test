// Absolute imports
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LoadingBar from 'react-redux-loading-bar';

// #region Styled
const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 20px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;
// #endregion

const PageContainer = ({ children }) => (
  <div>
    <LoadingBar updateTime={80} showFastActions style={{ height: '7px' }} />
    <Container>{children}</Container>
  </div>
);

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageContainer;
