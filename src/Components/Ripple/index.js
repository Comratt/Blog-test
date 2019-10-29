// Absolute imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styled
import { RippleWrap, RippleCircle } from './styled';

class Ripple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animations: [],
      circleSize: 0,
    };

    this.id = 0;
  }

  toggleClick = e => {
    const { animationDuration } = this.props;
    // eslint-disable-next-line no-plusplus
    const id = this.id++;

    const elementSize = e.currentTarget.getBoundingClientRect();
    const circleSize = Math.max(elementSize.height, elementSize.width);

    const x = e.clientX - elementSize.left - circleSize / 2;
    const y = e.clientY - elementSize.top - circleSize / 2;

    this.setState(
      prevState => ({
        animations: [...prevState.animations, { x, y, id }],
        circleSize,
      }),
      () => {
        setTimeout(
          () =>
            this.setState(prevState => ({
              animations: prevState.animations.filter(animation => animation.id !== id),
            })),
          animationDuration
        );
      }
    );
  };

  render() {
    const { animationDuration, color, shadow } = this.props;
    const { animations, circleSize } = this.state;
    return (
      <RippleWrap onClick={this.toggleClick} shadow={shadow}>
        {animations.map(elem => (
          <RippleCircle
            key={elem.id}
            x={elem.x}
            y={elem.y}
            size={circleSize}
            color={color}
            animationDuration={animationDuration}
          />
        ))}
      </RippleWrap>
    );
  }
}

Ripple.propTypes = {
  animationDuration: PropTypes.number,
  color: PropTypes.string,
  shadow: PropTypes.bool,
};

Ripple.defaultProps = {
  animationDuration: 400,
  color: '#ccc',
  shadow: false,
};

export default Ripple;
