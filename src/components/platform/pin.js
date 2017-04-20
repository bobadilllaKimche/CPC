import React, { PropTypes, Component } from 'react';

import { Image } from 'react-bootstrap';

import Img1 from './img/1.png';
import Img2 from './img/2.png';
import Img3 from './img/3.png';
import Img4 from './img/4.png';
import Img5 from './img/5.png';
import Img6 from './img/6.png';

const K_WIDTH = 40;
const K_HEIGHT = 40;

export default class Pin extends Component {
  static propTypes = {
    text: PropTypes.number,
    type: PropTypes.string,
    hover: PropTypes.number,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  selectIcon() {
    const { type } = this.props;
    if (type === 0) return <Image src={Img1} style={styles.image} />;
    else if (type === 1) return <Image src={Img1} style={styles.image} />;
    else if (type === 2) return <Image src={Img2} style={styles.image} />;
    else if (type === 3) return <Image src={Img3} style={styles.image} />;
    else if (type === 4) return <Image src={Img4} style={styles.image} />;
    else if (type === 5) return <Image src={Img5} style={styles.image} />;
    else if (type === 6) return <Image src={Img6} style={styles.image} />;
    else return null;
  }

  render() {
    // const { type } = this.props;
    const { hover, text } = this.props;
    return (
      <div style={styles.icon} className={hover === text ? 'animated pulse' : 'hvr-float'} >
        {this.selectIcon()}
      </div>
    );
  }
}

const styles = {
  icon: {
    // initially any map object has left top corner at lat lng coordinates
    // it's on you to set object origin to 0,0 coordinates
    position: 'absolute',
    width: K_WIDTH,
    height: K_HEIGHT,
    left: -K_WIDTH / 2,
    top: -K_HEIGHT / 2,
  },
  image: {
    height: 30,
  },
};
