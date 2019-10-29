// Absolute imports
import React  from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// Styled
import { Overlay, Content, Title } from './styled';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.modalRoot = document.createElement('div');
    document.body.appendChild(this.modalRoot);
  }

  componentWillUnmount() {
    document.body.removeChild(this.modalRoot);
  }

  render() {
    const { title, children } = this.props;
    return ReactDOM.createPortal(
      <Overlay>
        <Content>
          <Title>{title}</Title>
          {children}
        </Content>
      </Overlay>,
      this.modalRoot
    );
  }
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
