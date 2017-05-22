import React, { Component, PropTypes } from 'react';
import { Col, Modal, Thumbnail, Row } from 'react-bootstrap';
import imgEstudios from './img/estudios.png';
import imgMarcos from './img/marcos.png';
import imgPerfiles from './img/perfiles.png';
import imgRoles from './img/roles.png';

export default class ModalIniciativa extends Component {

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
          <Modal.Title>Formando Chilenos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{ fontStyle: 'italic' }}>
            El rol del sector privado es fundamental en la tarea de alinear los requerimientos del
            mundo productivo con el proceso formativo de los jóvenes para lograr buena formación y
            empleabilidad. En esta sección encontrarás los resultados del estudio realizado por la Fundación
            Chile con el fin de identificar y hacer un balance de las iniciativas del sector privado en la formación
            para el trabajo.
          </p>
          <hr />
          <Row>
            <Col xs={6} md={3}>
              <Thumbnail src={imgRoles} alt="242x200">
                <center>
                  <h5 style={{ fontWeight: 'bold', color: '#83bf27' }}>Rol de los sectores productivos</h5>
                  <p><a style={{ color: '#1f3245', cursor: 'pointer' }}>Informe Final</a></p>
                  <p><a style={{ color: '#1f3245', cursor: 'pointer' }}>Presentación Resumen</a></p>
                  <p><a style={{ color: '#1f3245', cursor: 'pointer' }}>Infografía resultados informe</a></p>
                </center>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail src={imgEstudios} alt="242x200">
                <center>
                  <h5 style={{ fontWeight: 'bold', color: '#83bf27' }}>Estudio de fuerza laboral</h5>
                  <p><a style={{ color: '#1f3245', cursor: 'pointer' }}>Sector Mineria</a></p>
                  <p><a style={{ color: '#1f3245', cursor: 'pointer' }}>Sector Forestal</a></p>
                  <p><a style={{ color: '#1f3245', cursor: 'pointer' }}>Sector Acuícola</a></p>
                  <p><a style={{ color: '#1f3245', cursor: 'pointer' }}>Sector Viticinícola</a></p>
                  <p><a style={{ color: '#1f3245', cursor: 'pointer' }}>Sector Comercio</a></p>
                </center>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail src={imgMarcos} alt="242x200">
                <center>
                  <h5 style={{ fontWeight: 'bold', color: '#83bf27' }}>Marcos de cualificaciones</h5>
                  <p><a style={{ color: '#1f3245', cursor: 'pointer' }}>Consejo de Competencias Minero</a></p>
                  <p><a style={{ color: '#1f3245', cursor: 'pointer' }}>ChileValora y Modelo Integrado</a></p>
                  <p><a style={{ color: '#1f3245', cursor: 'pointer' }}>Técnico Profesional MINEDUC</a></p>
                </center>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail src={imgPerfiles} alt="242x200">
                <center>
                  <h5 style={{ fontWeight: 'bold', color: '#83bf27' }}>Perfiles Chile valora</h5>
                </center>
              </Thumbnail>
            </Col>
          </Row>
        </Modal.Body>
        <hr style={{ marginBottom: 20, borderTop: '5px solid #83bf27' }} />
      </Modal>
    );
  }
}
