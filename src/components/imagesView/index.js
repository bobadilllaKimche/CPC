import React, { Component } from 'react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/lib/fa';

import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
import img4 from './img/img5.jpg';
import img5 from './img/img7.jpg';
import img6 from './img/img8.jpg';
import img7 from './img/img9.jpg';
import img8 from './img/img10.jpg';

import { Carousel } from 'react-bootstrap';

export default class ImagesView extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const images = [
      { item: img1 },
      { item: img2 },
      { item: img3 },
      { item: img4 },
      { item: img5 },
      { item: img6 },
      { item: img7 },
      { item: img8 },
    ];
    const { width, height } = this.props;
    return (
      <div>
        <Carousel nextIcon={<FaAngleRight size={50} style={{ marginTop: height * 0.5 }} />} prevIcon={<FaAngleLeft size={50} style={{ marginTop: height * 0.5 }} />}>
          {images.map(image =>
            <Carousel.Item>
              <img style={{ height, width }} alt="900x500" src={image.item} />
            </Carousel.Item>
          )}
        </Carousel>
      </div>
    );
  }
}
