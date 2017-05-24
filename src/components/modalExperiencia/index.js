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
import imgMin6 from './img/foto1.png';

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
      ],
      style: {
        description: {
          fontStyle: 'italic',
          fontSize: 14,
          fontFamily: 'Helvetica Neue Medium',
          textAlign: 'justify',
        },
        hr: {
          marginTop: 3,
          marginBottom: 3,
        },
        modal: { paddingLeft: 20, paddingRight: 20 },
        divisor: { marginBottom: 60, borderTop: '5px solid #83bf27' },
      },
    };
  }

  number(val, type) {
    return type ? (val + 1) % 5 : Math.abs((val - 1) % 5);
  }

  render() {
    const { show, close } = this.props;
    const { next, prev, videos, style, active } = this.state;
    console.log(active, -1 % 5);
    return (
      <Modal
        show={show}
        onHide={close}
        bsSize="large"
      >
        <Modal.Header closeButton style={style.modal}>
          <Modal.Title>EXPERIENCIAS SECTORIALES</Modal.Title>
        </Modal.Header>
        <Modal.Body style={style.modal}>
          <p style={style.description}>
            En esta sección encontrarás el modelo CT-MAC que implementa un sistema de evaluación y un proceso de mejoramiento de calidad
            del servicio de capacitación de las empresas formadoras, que culmina con la adquisición de un sello de calidad CPC como
            certificación para el sector.
          </p>
          <hr />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image src={!prev ? imgFleIzq : imgFleIzqHover} onMouseLeave={() => this.setState({ prev: false })} onMouseEnter={() => this.setState({ prev: true })} onClick={() => { this.refs.slider.slickPrev(); this.setState({ active: this.number(active, true) }); }} />
            <center>
              {active < 5 ?
                <YouTube
                  videoId={videos[active]}
                  opts={{
                    height: '400',
                    width: 800,
                    playerVars: { // https://developers.google.com/youtube/player_parameters
                      autoplay: 1,
                    },
                  }}
                />
                :
                <Image style={{ height: 400 }} src={imgMin6} responsive />
              }
            </center>
            <Image src={!next ? imgFleDer : imgFleDerHover} onMouseLeave={() => this.setState({ next: false })} onMouseEnter={() => this.setState({ next: true })} onClick={() => { this.refs.slider.slickPrev(); this.setState({ active: this.number(active, false) }); }} />
          </div>
          <hr style={style.hr} />
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
                <Image onClick={() => { this.refs.slider.slickGoTo(0); this.setState({ active: 0 }); }} src={imgMin4} role="presentation" style={{ width: '100%', height: 'auto', margin: 2 }} />
              </center>
              <center style={{ cursor: 'pointer' }}>
                <Image onClick={() => { this.refs.slider.slickGoTo(1); this.setState({ active: 1 }); }} src={imgMin3} role="presentation" style={{ width: '100%', height: 'auto', margin: 2 }} />
              </center>
              <center style={{ cursor: 'pointer' }}>
                <Image onClick={() => { this.refs.slider.slickGoTo(2); this.setState({ active: 2 }); }} src={imgMin1} role="presentation" style={{ width: '100%', height: 'auto', margin: 2 }} />
              </center>
              <center style={{ cursor: 'pointer' }}>
                <Image onClick={() => { this.refs.slider.slickGoTo(3); this.setState({ active: 3 }); }} src={imgMin5} role="presentation" style={{ width: '100%', height: 'auto', margin: 2 }} />
              </center>
              <center style={{ cursor: 'pointer' }}>
                <Image onClick={() => { this.refs.slider.slickGoTo(4); this.setState({ active: 4 }); }} src={imgMin2} role="presentation" style={{ width: '100%', height: 'auto', margin: 2 }} />
              </center>
              <center style={{ cursor: 'pointer' }}>
                <Image onClick={() => { this.refs.slider.slickGoTo(5); this.setState({ active: 5 }); }} src={imgMin6} role="presentation" style={{ width: '100%', height: 'auto', margin: 2 }} />
              </center>
            </Slider>
          </div>
        </Modal.Body>
        <hr style={style.divisor} />
      </Modal>
    );
  }
}
