import React, { Component, PropTypes } from 'react';
import { Modal, Image } from 'react-bootstrap';
import YouTube from 'react-youtube';
import Slider from 'react-slick';

// import FaCircleThin from 'react-icons/lib/fa/circle-thin';
// import FaCircle from 'react-icons/lib/fa/circle';

import imgMin1 from './img/Miniatura.png';
import imgMin2 from './img/Miniatura2.png';
import imgMin3 from './img/miniatura3.png';
import imgMin4 from './img/miniatura4.png';
import imgMin5 from './img/miniatura5.png';
import imgMin6 from './img/miniatura6.png';
import imgMin7 from './img/Miniatura7.png';

import imgBol1 from './img/Nestle1.jpg';
import imgBol2 from './img/Nestle2.jpg';

import imgFleDer from './img/flechaDer.png';
import imgFleDerHover from './img/flechaDerHover.png';
import imgFleIzq from './img/flechaIzq.png';
import imgFleIzqHover from './img/flechaIzqHover.png';

export default class ModalFormando extends Component {

  static get propTypes() {
    return {
      show: PropTypes.bool,
      close: PropTypes.func,
      width: PropTypes.int,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      next: false,
      prev: false,
      active: 0,
      videos: [
        'aQgChKon0vE',
        'W8QYWb8uQhE',
        'B9a39wTo2yI',
        'JO4lTzRSCec',
        'Go_CD4RgAOw',
        'bS2rGGe1reo',
      ],
      style: {
        description: {
          fontSize: 14,
          fontFamily: 'Helvetica Neue',
          textAlign: 'justify',
          color: '#474761',
        },
        title: {
          lineHeight: 1,
          fontSize: 16,
          fontFamily: 'Lato',
          color: '#83bf27',
          height: 40,
          marginTop: 10,
        },
        superTitle: {
          fontSize: 18.84,
          fontFamily: 'Lato',
          color: '#474761',
        },
        item: {
          lineHeight: 1,
          fontFamily: 'Helvetica Neue',
          color: '#474761',
          cursor: 'pointer',
          fontSize: 14,
        },
        hr: {
          marginTop: 3,
          marginBottom: 3,
        },
        modal: { paddingLeft: 20, paddingRight: 20 },
        divisorVideo: { borderTop: '5px solid #474761' },
      },
    };
  }

  number(val, type) {
    return !type ? (val + 1) % 7 : val === 0 ? 6 : (val - 1) % 7;
  }

  render() {
    const { show, close, width } = this.props;
    const { next, prev, videos, style, active } = this.state;
    return (
      <Modal
        show={show}
        onHide={close}
        bsSize="large"
      >
        <Modal.Header closeButton style={style.modal}>
          <Modal.Title style={style.superTitle}>EXPERIENCIAS SECTORIALES</Modal.Title>
        </Modal.Header>
        <Modal.Body style={style.modal}>
          <hr />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image src={!prev ? imgFleIzq : imgFleIzqHover} onMouseLeave={() => this.setState({ prev: false })} onMouseEnter={() => this.setState({ prev: true })} onClick={() => { this.refs.slider.slickPrev(); this.setState({ active: this.number(active, true) }); }} />
            <center>
              {active < 6 ?
                <YouTube
                  videoId={videos[active]}
                  opts={{
                    height: width > 773 ? 350 : 250,
                    width: width > 993 ? 800 : width > 773 ? 500 : width * 0.6,
                    playerVars: { // https://developers.google.com/youtube/player_parameters
                      autoplay: 1,
                    },
                  }}
                />
                :
                <div style={{ display: 'flex', alignItems: 'center', height: width > 773 ? 400 : 400, width: width > 993 ? 800 : width > 773 ? 500 : width * 0.75 }}>
                  <Image src={imgBol1} style={{ height: 350, width: width > 993 ? 400 : width > 773 ? 250 : width * 0.375 }} />
                  <Image src={imgBol2} style={{ height: 350, width: width > 993 ? 400 : width > 773 ? 250 : width * 0.375 }} />
                </div>
              }
            </center>
            <Image src={!next ? imgFleDer : imgFleDerHover} onMouseLeave={() => this.setState({ next: false })} onMouseEnter={() => this.setState({ next: true })} onClick={() => { this.refs.slider.slickNext(); this.setState({ active: this.number(active, false) }); }} />
          </div>
          <hr style={style.divisorVideo} />
          <div style={{ marginTop: 5, marginLeft: 5, marginRight: 5 }}>
            <Slider
              ref="slider"
              slideToScroll
              infinite
              slidesToShow={5}
              dots
              centerMode
            >
              <center style={{ cursor: 'pointer' }}>
                <Image onClick={() => { this.refs.slider.slickGoTo(0); this.setState({ active: 0 }); }} src={imgMin4} role="presentation" style={{ width: '100%', height: 'auto', padding: 3 }} />
              </center>
              <center style={{ cursor: 'pointer' }}>
                <Image onClick={() => { this.refs.slider.slickGoTo(1); this.setState({ active: 1 }); }} src={imgMin3} role="presentation" style={{ width: '100%', height: 'auto', padding: 3 }} />
              </center>
              <center style={{ cursor: 'pointer' }}>
                <Image onClick={() => { this.refs.slider.slickGoTo(2); this.setState({ active: 2 }); }} src={imgMin1} role="presentation" style={{ width: '100%', height: 'auto', padding: 3 }} />
              </center>
              <center style={{ cursor: 'pointer' }}>
                <Image onClick={() => { this.refs.slider.slickGoTo(3); this.setState({ active: 3 }); }} src={imgMin5} role="presentation" style={{ width: '100%', height: 'auto', padding: 3 }} />
              </center>
              <center style={{ cursor: 'pointer' }}>
                <Image onClick={() => { this.refs.slider.slickGoTo(4); this.setState({ active: 4 }); }} src={imgMin2} role="presentation" style={{ width: '100%', height: 'auto', padding: 3 }} />
              </center>
              <center style={{ cursor: 'pointer' }}>
                <Image onClick={() => { this.refs.slider.slickGoTo(5); this.setState({ active: 5 }); }} src={imgMin7} role="presentation" style={{ width: '100%', height: 'auto', padding: 3 }} />
              </center>
              <center style={{ cursor: 'pointer' }}>
                <Image onClick={() => { this.refs.slider.slickGoTo(6); this.setState({ active: 6 }); }} src={imgMin6} role="presentation" style={{ width: '100%', height: 'auto', padding: 3 }} />
              </center>
            </Slider>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}
