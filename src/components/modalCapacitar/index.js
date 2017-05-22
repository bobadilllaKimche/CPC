import React, { Component, PropTypes } from 'react';
import { Col, Modal, Thumbnail, Row, OverlayTrigger, Popover } from 'react-bootstrap';
import imgBoletin from './img/boletin.png';
import imgEmpresas from './img/empresas.png';
import imgSeminarios from './img/seminario.png';
import imgInforme from './img/informe.png';

import doc1 from '../../files/capacitar/Descripción del seminario Proyecciones y desafíos para la calidad de la capacitación en Chile.docx';
import img1 from '../../files/capacitar/3.2 Empresas participantes.jpg';
import img2 from '../../files/capacitar/Sintesis seminario.jpg';
import pdf1 from '../../files/capacitar/Boletin 1.pdf';
import pdf2 from '../../files/capacitar/Boletin 2.pdf';

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
    };
  }

  render() {
    const { show, close } = this.props;
    return (
      <Modal
        show={show}
        onHide={close}
        bsSize="large"
      >
        <Modal.Header closeButton>
          <Modal.Title>CAPACITAR CON CALIDAD</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ fontStyle: 'italic', fontSize: 12 }}>
            En esta sección encontrarás el modelo CT-MAC que implementa un sistema de evaluación y un proceso de mejoramiento de calidad del servicio de
            capacitación de las empresas formadoras, que culmina con la adquisición de un sello de calidad CPC como certificación para el sector.
          </p>
          <hr />
          <Row>
            <Col xs={6} md={3} style={{ padding: 3 }}>
              <Thumbnail src={imgInforme} alt="242x200">
                <OverlayTrigger placement="top" overlay={<Popover id="tooltip">En proceso...</Popover>}>
                  <p style={{ lineHeight: 1, fontSize: 18.84, fontWeight: 'bold', color: '#83bf27', height: 60 }}>INFORME EJECUTIVO</p>
                </OverlayTrigger>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3} style={{ padding: 3 }}>
              <Thumbnail src={imgEmpresas} alt="242x200">
                <p style={{ lineHeight: 1, fontSize: 18.84, fontWeight: 'bold', color: '#83bf27', height: 60 }}>EMPRESAS PARTICIPANTES</p>
                <p style={{ lineHeight: 1 }} onClick={() => window.open(img1)}>Empresas</p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3} style={{ padding: 3 }}>
              <Thumbnail src={imgSeminarios} alt="242x200">
                <p style={{ lineHeight: 1, fontSize: 18.84, fontWeight: 'bold', color: '#83bf27', height: 60 }}>SEMINARIO</p>
                <p style={{ lineHeight: 1 }} onClick={() => window.open(doc1)}><a style={{ color: '#1f3245', cursor: 'pointer', fontSize: 14 }}>Descripcion Evento</a></p>
                <p style={{ lineHeight: 1 }} onClick={() => window.open(img2)}><a style={{ color: '#1f3245', cursor: 'pointer', fontSize: 14 }}>Síntesis del Seminario</a></p>
                {/* <p style={{ lineHeight: 1 }} onClick={() => window.open(pdf6)}><a style={{ color: '#1f3245', cursor: 'pointer', fontSize: 14 }}>Fotos</a></p> */}
              </Thumbnail>
            </Col>
            <Col xs={6} md={3} style={{ padding: 3 }}>
              <Thumbnail src={imgBoletin} alt="242x200">
                <p style={{ lineHeight: 1, fontSize: 18.84, fontWeight: 'bold', color: '#83bf27', height: 60 }}>BOLETINES</p>
                <p style={{ lineHeight: 1 }}><a style={{ color: '#1f3245', cursor: 'pointer', fontSize: 14 }} onClick={() => window.open(pdf1)}>Boletin 1</a></p>
                <p style={{ lineHeight: 1 }}><a style={{ color: '#1f3245', cursor: 'pointer', fontSize: 14 }} onClick={() => window.open(pdf2)}>Boletin 2</a></p>
              </Thumbnail>
            </Col>
          </Row>
        </Modal.Body>
        <hr style={{ marginBottom: 20, borderTop: '5px solid #83bf27' }} />
      </Modal>
    );
  }
}
