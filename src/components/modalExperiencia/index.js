import React, { Component, PropTypes } from 'react';
import { Col, Modal, Image, Row, OverlayTrigger, Popover } from 'react-bootstrap';
import YouTube from 'react-youtube';
import Slider from 'react-slick';

import imgNestle1 from './img/nestle.png';
import imgNestle2 from './img/nestle2.png';
import imgNestle3 from './img/nestle3.png';
import imgTelefonica from './img/telefonica.png';
import imgVinos from './img/vinos.png';

import imgBoletin1 from './img/Nestle1.jpg';
import imgBoletin2 from './img/Nestle2.jpg';

import imgFleDer from './img/flechaDer.png';
import imgFleDerHover from './img/flechaDerHover.png';
import imgFleIzq from './img/flechaIzq.png';
import imgFleIzqHover from './img/flechaIzqHover.png';

export default class ModalFormando extends Component {

  static get propTypes() {
    return {
      show: PropTypes.bool,
      close: PropTypes.func,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      next: false,
      prev: false,
      acive: 0,
      settings: {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        className: 'center',
      },
      opts: {
        height: '450',
        width: '800',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      },
      videos: [
        'aQgChKon0vE',
        'W8QYWb8uQhE',
        'B9a39wTo2yI',
        'JO4lTzRSCec',
        'Go_CD4RgAOw',
      ],
    };
  }

  render() {
    const { show, close, width } = this.props;
    const { settings, opts, next, prev, active, videos } = this.state;
    console.log(width);
    return (
      <Modal
        show={show}
        onHide={close}
        bsSize="large"
      >
        <Modal.Header closeButton>
          <Modal.Title>EXPERIENCIAS SECTORIALES</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ fontStyle: 'italic', fontSize: 12 }}>
            En esta sección encontrarás el modelo CT-MAC que implementa un sistema de evaluación y un proceso de mejoramiento de calidad
            del servicio de capacitación de las empresas formadoras, que culmina con la adquisición de un sello de calidad CPC como
            certificación para el sector.
          </p>
          <hr />
          {active < 5 ?
            <YouTube
              videoId={videos[active]}
              opts={{
                height: '450',
                width: width > 993 ? 800 : width * 0.8,
                playerVars: { // https://developers.google.com/youtube/player_parameters
                  autoplay: 1,
                },
              }}
            />
            :
            <center>
              <Image src={active === 5 ? imgBoletin1 : imgBoletin2} responsive />
            </center>
          }
          <div style={{ marginTop: 5, marginLeft: 5, marginRight: 5 }}>
            <Slider
              ref="slider"
              slideToShow
              slideToScroll
              infinite
              nextArrow={<Image src={!next ? imgFleDer : imgFleDerHover} onMouseLeave={() => this.setState({ next: false })} onMouseEnter={() => this.setState({ next: true })} />}
              prevArrow={<Image src={!prev ? imgFleIzq : imgFleIzqHover} onMouseLeave={() => this.setState({ prev: false })} onMouseEnter={() => this.setState({ prev: true })} />}
              {...settings}
            >
              <center style={{ cursor: 'pointer' }}>
                <Image onClick={() => { this.refs.slider.slickGoTo(0); this.setState({ active: 0 }); }} src={imgNestle1} role="presentation" style={{ height: 80 }} />
              </center>
              <center style={{ cursor: 'pointer' }}>
                <Image onClick={() => { this.refs.slider.slickGoTo(1); this.setState({ active: 1 }); }} src={imgNestle2} role="presentation" style={{ height: 80 }} />
              </center>
              <center style={{ cursor: 'pointer' }}>
                <Image onClick={() => { this.refs.slider.slickGoTo(2); this.setState({ active: 2 }); }} src={imgNestle3} role="presentation" style={{ height: 80 }} />
              </center>
              <center style={{ cursor: 'pointer' }}>
                <Image onClick={() => { this.refs.slider.slickGoTo(3); this.setState({ active: 3 }); }} src={imgTelefonica} role="presentation" style={{ height: 80 }} />
              </center>
              <center style={{ cursor: 'pointer' }}>
                <Image onClick={() => { this.refs.slider.slickGoTo(4); this.setState({ active: 4 }); }} src={imgVinos} role="presentation" style={{ height: 80 }} />
              </center>
              <center style={{ cursor: 'pointer' }}>
                <Image onClick={() => { this.refs.slider.slickGoTo(5); this.setState({ active: 5 }); }} src={imgBoletin1} role="presentation" style={{ height: 80 }} />
              </center>
              <center style={{ cursor: 'pointer' }}>
                <Image onClick={() => { this.refs.slider.slickGoTo(6); this.setState({ active: 6 }); }} src={imgBoletin2} role="presentation" style={{ height: 80 }} />
              </center>
            </Slider>
          </div>
        </Modal.Body>
        <hr style={{ marginBottom: 20, borderTop: '5px solid #83bf27' }} />
      </Modal>
    );
  }
}
