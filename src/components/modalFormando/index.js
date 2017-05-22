import React, { Component, PropTypes } from 'react';
import { Col, Modal, Thumbnail, Row, OverlayTrigger, Popover } from 'react-bootstrap';
import imgEstudios from './img/estudios.png';
import imgMarcos from './img/marcos.png';
import imgPerfiles from './img/perfiles.png';
import imgRoles from './img/roles.png';

import pdf1 from '../../files/formando/Presentación resumen.pdf';
import pdf2 from '../../files/formando/1. Introducción.pdf';
import pdf3 from '../../files/formando/2. Procesos de extracción.pdf';
import pdf4 from '../../files/formando/3. Procesamiento de cobre oro y plata.pdf';
import pdf5 from '../../files/formando/4. Procesos de mantenimiento.pdf';
import pdf6 from '../../files/formando/Marco-de-Cualificaciones-Chile Valora.pdf';
import doc1 from '../../files/formando/Sector Forestal.docx';

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
          <Modal.Title>FORMANDO CHILENOS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ fontStyle: 'italic', fontSize: 12 }}>
            El rol del sector privado es fundamental en la tarea de alinear los requerimientos del
            mundo productivo con el proceso formativo de los jóvenes para lograr buena formación y
            empleabilidad. En esta sección encontrarás los resultados del estudio realizado por la Fundación
            Chile con el fin de identificar y hacer un balance de las iniciativas del sector privado en la formación
            para el trabajo.
          </p>
          <hr />
          <Row>
            <Col xs={6} md={3} style={{ padding: 3 }}>
              <Thumbnail src={imgRoles} alt="242x200">
                <p style={{ lineHeight: 1, fontSize: 18.84, fontWeight: 'bold', color: '#83bf27', height: 60 }}>ROL DE LOS SECTORES PRODUCTIVOS</p>
                <OverlayTrigger placement="top" overlay={<Popover id="tooltip">En proceso...</Popover>}>
                  <p><a style={{ color: '#1f3245', cursor: 'pointer', fontSize: 14 }}>Informe Final</a></p>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Popover id="tooltip">En proceso...</Popover>}>
                  <p><a style={{ color: '#1f3245', cursor: 'pointer', fontSize: 14 }}>Presentación Resumen</a></p>
                </OverlayTrigger>
                <p style={{ lineHeight: 1 }}><a style={{ color: '#1f3245', cursor: 'pointer', fontSize: 14 }} onClick={() => window.open(pdf1)}>Infografía resultados informe</a></p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3} style={{ padding: 3 }}>
              <Thumbnail src={imgEstudios} alt="242x200">
                <p style={{ lineHeight: 1, fontSize: 18.84, fontWeight: 'bold', color: '#83bf27', height: 60 }}>ESTUDIO DE FUERZA LABORAL</p>
                <p><a style={{ color: '#1f3245', cursor: 'pointer', fontSize: 14 }} target="_blank" href="http://www.consejominero.cl/wp-content/uploads/2016/04/Estudio-Fuerza-Laboral-de-la-Gran-Miner%C3%ADa-2015-2024.pdf">Sector Mineria</a></p>
                <p><a style={{ color: '#1f3245', cursor: 'pointer', fontSize: 14 }} target="_blank" href="http://www.corma.cl/_file/material/estudio-fuerza-laboral-de-la-industria-forestal-chilena-2015-2030_-diagnostico-y-recomendaciones.pdf">Sector Forestal</a></p>
                <OverlayTrigger placement="top" overlay={<Popover id="tooltip">En proceso...</Popover>}>
                  <p><a style={{ color: '#1f3245', cursor: 'pointer', fontSize: 14 }}>Sector Acuícola</a></p>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Popover id="tooltip">En proceso...</Popover>}>
                  <p><a style={{ color: '#1f3245', cursor: 'pointer', fontSize: 14 }}>Sector Viticinícola</a></p>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Popover id="tooltip">En proceso...</Popover>}>
                  <p><a style={{ color: '#1f3245', cursor: 'pointer', fontSize: 14 }}>Sector Comercio</a></p>
                </OverlayTrigger>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3} style={{ padding: 3 }}>
              <Thumbnail src={imgMarcos} alt="242x200">
                <p style={{ lineHeight: 1, fontSize: 18.84, fontWeight: 'bold', color: '#83bf27', height: 60 }}>MARCOS DE CUALIFICACIONES</p>
                <p style={{ lineHeight: 1 }}>Consejo de Competencias Minero</p>
                <p style={{ marginLeft: 10, lineHeight: 1 }}>1.<a style={{ color: '#1f3245', cursor: 'pointer', fontSize: 14, marginLeft: 3 }} onClick={() => window.open(pdf2)}>Introducción</a></p>
                <p style={{ marginLeft: 10, lineHeight: 1 }}>2.<a style={{ color: '#1f3245', cursor: 'pointer', fontSize: 14, marginLeft: 3 }} onClick={() => window.open(pdf3)}>Procesos de extracción</a></p>
                <p style={{ marginLeft: 10, lineHeight: 1 }}>3.<a style={{ color: '#1f3245', cursor: 'pointer', fontSize: 14, marginLeft: 3 }} onClick={() => window.open(pdf4)}>Procesamiento de cobre, oro y plata</a></p>
                <p style={{ marginLeft: 10, lineHeight: 1 }}>4.<a style={{ color: '#1f3245', cursor: 'pointer', fontSize: 14, marginLeft: 3 }} onClick={() => window.open(pdf5)}>Procesamiento de mantenimiento</a></p>
                <p onClick={() => window.open(pdf6)}><a style={{ color: '#1f3245', cursor: 'pointer', fontSize: 14 }}>ChileValora</a></p>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3} style={{ padding: 3 }}>
              <Thumbnail src={imgPerfiles} alt="242x200">
                <p style={{ lineHeight: 1, fontSize: 18.84, fontWeight: 'bold', color: '#83bf27', height: 60 }}>PERFILES CHILE VALORA</p>
                <p style={{ lineHeight: 1 }}><a style={{ color: '#1f3245', cursor: 'pointer', fontSize: 14 }} target="_blank" href="http://www.chilevalora.cl/buscador/index.php/PerfilCompetencia/index">Buscador de perfiles ChileValora</a></p>
                <p style={{ lineHeight: 1 }}><a style={{ color: '#1f3245', cursor: 'pointer', fontSize: 14 }} onClick={() => window.open(doc1)}>Sector Forestal</a></p>
              </Thumbnail>
            </Col>
          </Row>
        </Modal.Body>
        <hr style={{ marginBottom: 20, borderTop: '5px solid #83bf27' }} />
      </Modal>
    );
  }
}
