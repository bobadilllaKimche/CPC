import React, { Component, PropTypes } from 'react';
import { Col, Modal, Image, Row, OverlayTrigger, Popover } from 'react-bootstrap';
import imgNoticias from './img/noticias.png';
import imgPlan from './img/plan.png';
import imgReporte from './img/reporte.png';
import imgTaller from './img/talleres.png';

import doc1 from '../../files/fortaleciendo/Comunicado Convenio CPC-UC.pdf';

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
          <Modal.Title>FORTALECIENDO LA FORMACIÓN TÉCNICA</Modal.Title>
        </Modal.Header>
        <Modal.Body style={style.modal}>
          <p style={style.description}>
            En esta sección encontrarás el detalle del proyecto que la CPC con el Centro de Políticas Públicas de la UC, Inacap y Duoc,
            está desarrollando para identificar las dificultades en el funcionamiento de la educación técnica y desarrollar un mayor
            vínculo entre los establecimientos de enseñanza media con los de educación superior y las empresas.
          </p>
          <hr />
          <Row>
            <Col xs={6} md={3}>
              <Image src={imgPlan} alt="242x200" />
              <OverlayTrigger placement="top" overlay={<Popover id="tooltip">En proceso...</Popover>}>
                <p style={style.title}>PLAN DE ACCIÓN</p>
              </OverlayTrigger>
            </Col>
            <Col xs={6} md={3}>
              <Image src={imgReporte} alt="242x200" />
              <OverlayTrigger placement="top" overlay={<Popover id="tooltip">En proceso...</Popover>}>
                <p style={style.title}>REPORTE DE ANTECEDENTES</p>
              </OverlayTrigger>
            </Col>
            <Col xs={6} md={3}>
              <Image src={imgTaller} alt="242x200" />
              <p style={style.title}>TALLERES DE VALIDACIÓN</p>
              <OverlayTrigger placement="top" overlay={<Popover id="tooltip">En proceso...</Popover>}>
                <p><a style={style.item}>Talleres Nacionales</a></p>
              </OverlayTrigger>
              <hr style={style.hr} />
              <OverlayTrigger placement="top" overlay={<Popover id="tooltip">En proceso...</Popover>}>
                <p><a style={style.item}>Talleres Regionales</a></p>
              </OverlayTrigger>
              <hr style={style.hr} />
            </Col>
            <Col xs={6} md={3}>
              <Image src={imgNoticias} alt="242x200" />
              <p style={style.title}>NOTICIAS</p>
              <p><a style={style.item} onClick={() => window.open(doc1)} >Titular</a></p>
              <hr style={style.hr} />
              <OverlayTrigger placement="top" overlay={<Popover id="tooltip">En proceso...</Popover>}>
                <p><a style={style.item} >En la prensa</a></p>
              </OverlayTrigger>
              <hr style={style.hr} />
            </Col>
          </Row>
        </Modal.Body>
        <hr style={style.divisor} />
      </Modal>
    );
  }
}
