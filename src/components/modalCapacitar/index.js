import React, { Component, PropTypes } from 'react';
import { Col, Modal, Image, Row, OverlayTrigger, Popover } from 'react-bootstrap';
import imgBoletin from './img/boletin.png';
import imgEmpresas from './img/empresas.png';
import imgSeminarios from './img/seminario.png';
import imgInforme from './img/informe.png';

import img1 from '../../files/capacitar/3.2 Empresas participantes.jpg';
import img2 from '../../files/capacitar/Sintesis seminario.jpg';
import pdf1 from '../../files/capacitar/Boletin 1.pdf';
import pdf2 from '../../files/capacitar/Boletin 2.pdf';
import pdf3 from '../../files/capacitar/Descripción Evento.pdf';

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
      style: {
        description: {
          fontStyle: 'italic',
          fontSize: 14,
          fontFamily: 'Helvetica Neue Medium',
          textAlign: 'justify',
        },
        title: {
          lineHeight: 1,
          fontSize: 18.84,
          fontFamily: 'Lato Regular 400',
          color: '#83bf27',
          height: 50,
        },
        item: {
          lineHeight: 1,
          fontFamily: 'Helvetica Neue Regular',
          color: '#474761',
          cursor: 'pointer',
          fontSize: 14,
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

  render() {
    const { show, close } = this.props;
    const { style } = this.state;
    return (
      <Modal
        show={show}
        onHide={close}
        bsSize="large"
      >
        <Modal.Header closeButton style={style.modal}>
          <Modal.Title>CAPACITAR CON CALIDAD</Modal.Title>
        </Modal.Header>
        <Modal.Body style={style.modal}>
          <p style={style.description}>
            En esta sección encontrarás el modelo CT-MAC que implementa un sistema de evaluación y un proceso de mejoramiento de calidad del servicio de
            capacitación de las empresas formadoras, que culmina con la adquisición de un sello de calidad CPC como certificación para el sector.
          </p>
          <hr />
          <Row>
            <Col xs={6} md={3}>
              <Image src={imgInforme} alt="242x200" />
              <OverlayTrigger placement="top" overlay={<Popover id="tooltip">En proceso...</Popover>}>
                <p style={style.title}>INFORME EJECUTIVO</p>
              </OverlayTrigger>
            </Col>
            <Col xs={6} md={3}>
              <Image src={imgEmpresas} alt="242x200" />
              <p style={style.title}>EMPRESAS PARTICIPANTES</p>
              <p onClick={() => window.open(img1)}><a style={style.item}>Empresas</a></p>
              <hr style={style.hr} />
            </Col>
            <Col xs={6} md={3}>
              <Image src={imgSeminarios} alt="242x200" />
              <p style={style.title}>SEMINARIO</p>
              <p onClick={() => window.open(pdf3)}><a style={style.item}>Descripción Evento</a></p>
              <hr style={style.hr} />
              <p onClick={() => window.open(img2)}><a style={style.item}>Síntesis del Seminario</a></p>
              <hr style={style.hr} />
              <p><a style={style.item} href={'https://www.dropbox.com/sh/nboegejcj6aiumb/AACtMDFapvypCouBKfpH8_Moa/3.%20Capacitar%20con%20calidad/3.3%20Seminario/Fotos?dl=0'}>Fotos</a></p>
              <hr style={style.hr} />
            </Col>
            <Col xs={6} md={3}>
              <Image src={imgBoletin} alt="242x200" />
              <p style={style.title}>BOLETINES</p>
              <p><a style={style.item} onClick={() => window.open(pdf1)}>Boletín 1</a></p>
              <hr style={style.hr} />
              <p><a style={style.item} onClick={() => window.open(pdf2)}>Boletín 2</a></p>
              <hr style={style.hr} />
            </Col>
          </Row>
        </Modal.Body>
        <hr style={style.divisor} />
      </Modal>
    );
  }
}
