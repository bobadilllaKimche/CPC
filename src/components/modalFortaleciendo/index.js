import React, { Component, PropTypes } from 'react';
import { Col, Modal, Thumbnail, Row, OverlayTrigger, Popover } from 'react-bootstrap';
import imgNoticias from './img/noticias.png';
import imgPlan from './img/plan.png';
import imgReporte from './img/reporte.png';
import imgTaller from './img/talleres.png';

import img1 from '../../files/fortaleciendo/Firma.JPG';
import doc1 from '../../files/fortaleciendo/Comunicado Convenio CPC-UC-INACAP-DUOC.docx';

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
          <Modal.Title>FORTALECIONDO LA FORMACIÓN TÉCNICA</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ fontStyle: 'italic', fontSize: 12 }}>
            En esta sección encontrarás el detalle del proyecto que la CPC con el Centro de Políticas Públicas de la UC, Inacap y Duoc,
            está desarrollando para identificar las dificultades en el funcionamiento de la educación técnica y desarrollar un mayor
            vínculo entre los establecimientos de enseñanza media con los de educación superior y las empresas.
          </p>
          <hr />
          <Row>
            <Col xs={6} md={3} style={{ padding: 3 }}>
              <Thumbnail src={imgPlan} alt="242x200">
                <OverlayTrigger placement="top" overlay={<Popover id="tooltip">En proceso...</Popover>}>
                  <p style={{ lineHeight: 1, fontSize: 18.84, fontWeight: 'bold', color: '#83bf27', height: 60 }}>PLAN DE ACCIÓN</p>
                </OverlayTrigger>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3} style={{ padding: 3 }}>
              <Thumbnail src={imgReporte} alt="242x200">
                <OverlayTrigger placement="top" overlay={<Popover id="tooltip">En proceso...</Popover>}>
                  <p style={{ lineHeight: 1, fontSize: 18.84, fontWeight: 'bold', color: '#83bf27', height: 60 }}>REPORTE DE ANTECEDENTES</p>
                </OverlayTrigger>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3} style={{ padding: 3 }}>
              <Thumbnail src={imgTaller} alt="242x200">
                <p style={{ lineHeight: 1, fontSize: 18.84, fontWeight: 'bold', color: '#83bf27', height: 60 }}>TALLERES DE VALIDACIÓN</p>
                <OverlayTrigger placement="top" overlay={<Popover id="tooltip">En proceso...</Popover>}>
                  <p><a style={{ color: '#1f3245', cursor: 'pointer', fontSize: 14 }}>Talleres Nacionales</a></p>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Popover id="tooltip">En proceso...</Popover>}>
                  <p><a style={{ color: '#1f3245', cursor: 'pointer', fontSize: 14 }}>Talleres Regionales</a></p>
                </OverlayTrigger>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3} style={{ padding: 3 }}>
              <Thumbnail src={imgNoticias} alt="242x200">
                <p style={{ lineHeight: 1, fontSize: 18.84, fontWeight: 'bold', color: '#83bf27', height: 60 }}>NOTICIAS</p>
                <p style={{ lineHeight: 1 }}><a style={{ color: '#1f3245', cursor: 'pointer', fontSize: 14 }} onClick={() => window.open(img1)} >Comunidado</a></p>
                <p style={{ lineHeight: 1 }}><a style={{ color: '#1f3245', cursor: 'pointer', fontSize: 14 }} onClick={() => window.open(doc1)} >Imagenes</a></p>
              </Thumbnail>
            </Col>
          </Row>
        </Modal.Body>
        <hr style={{ marginBottom: 20, borderTop: '5px solid #83bf27' }} />
      </Modal>
    );
  }
}
