import React, { Component, PropTypes } from 'react';
import { Col, Modal, Thumbnail, Row } from 'react-bootstrap';
import imgCpc from './cpc.jpg';

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
            empleabilidad. En esta sección, encontrarás los resultados del estudio realizado por la Fundación
            Chile, realizado con el fin de identificar y hacer un balance de las iniciativas del sector privado en la
            formación para el trabajo.
          </p>
          <hr />
          <Row>
            <Col xs={6} md={3}>
              <Thumbnail src={imgCpc} alt="242x200">
                <center>
                  <h5 style={{ fontWeight: 'bold' }}>Roles de los sectores productivos</h5>
                  <p><a style={{ color: '#323247', cursor: 'pointer' }}>Informe Final</a></p>
                  <p><a style={{ color: '#323247', cursor: 'pointer' }}>Presentación Resumen</a></p>
                  <p><a style={{ color: '#323247', cursor: 'pointer' }}>Infografía resultados informe</a></p>
                </center>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail src={imgCpc} alt="242x200">
                <center>
                  <h5 style={{ fontWeight: 'bold' }}>Estudio de fuerza laboral</h5>
                  <p><a style={{ color: '#323247', cursor: 'pointer' }}>Sector Mineria</a></p>
                  <p><a style={{ color: '#323247', cursor: 'pointer' }}>Sector Forestal</a></p>
                  <p><a style={{ color: '#323247', cursor: 'pointer' }}>Sector Acuícola</a></p>
                  <p><a style={{ color: '#323247', cursor: 'pointer' }}>Sector Viticinícola</a></p>
                  <p><a style={{ color: '#323247', cursor: 'pointer' }}>Sector Comercio</a></p>
                </center>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail src={imgCpc} alt="242x200">
                <center>
                  <h5 style={{ fontWeight: 'bold' }}>Marcos de cualificaciones</h5>
                  <p><a style={{ color: '#323247', cursor: 'pointer' }}>Consejo de Competencias Minero</a></p>
                  <p><a style={{ color: '#323247', cursor: 'pointer' }}>ChileValora y Modelo Integrado</a></p>
                  <p><a style={{ color: '#323247', cursor: 'pointer' }}>Técnico Profesional MINEDUC</a></p>
                </center>
              </Thumbnail>
            </Col>
            <Col xs={6} md={3}>
              <Thumbnail src={imgCpc} alt="242x200">
                <center>
                  <h5 style={{ fontWeight: 'bold' }}>Perfiles Chile valora</h5>
                  <p><a style={{ color: '#323247', cursor: 'pointer' }}>Informe Final</a></p>
                  <p><a style={{ color: '#323247', cursor: 'pointer' }}>Presentación Resumen</a></p>
                  <p><a style={{ color: '#323247', cursor: 'pointer' }}>Infografía resultados informe</a></p>
                </center>
              </Thumbnail>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    );
  }
}

const styles = {
};
