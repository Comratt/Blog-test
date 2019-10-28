// Absolute imports
import React  from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// Components
import Button from '../Button';

// Styled
import { Overlay, Content, Footer, Title } from './styled';

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
    const { title, children, onClose, onAction } = this.props;
    return ReactDOM.createPortal(
      <Overlay onClick={onClose}>
        <Title>{title}</Title>
        <Content>{children}</Content>
        <Footer>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onAction}>Save</Button>
        </Footer>
      </Overlay>,
      this.modalRoot
    );
  }
}

export default Modal;
