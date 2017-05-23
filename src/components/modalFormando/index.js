import React, { Component, PropTypes } from 'react';
import { Col, Modal, Image, Row, OverlayTrigger, Popover } from 'react-bootstrap';
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
        itemS: {
          lineHeight: 1,
          fontFamily: 'Helvetica Neue Regular',
          color: '#474761',
          cursor: 'pointer',
          fontSize: 16,
        },
        item2: {
          lineHeight: 1,
          fontFamily: 'Helvetica Neue Regular',
          color: '#474761',
          cursor: 'pointer',
          fontSize: 14,
          paddingLeft: 3,
        },
        item4: {
          lineHeight: 1,
          fontFamily: 'Helvetica Neue Regular',
          color: '#474761',
          cursor: 'pointer',
          fontSize: 14,
        },
        itemTitle: {
          lineHeight: 1,
          fontFamily: 'Helvetica Neue Regular',
          color: '#474761',
          cursor: 'pointer',
          fontSize: 14,
          fontWeight: 'bold',
        },
        hr: {
          marginTop: 3,
          marginBottom: 3,
        },
        modal: { paddingLeft: 20, paddingRight: 20 },
        divisor: { marginBottom: 60, borderTop: '5px solid #83bf27' },
        number: { marginLeft: 15, fontFamily: 'Helvetica Neue Regular' },
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
        <Modal.Header closeButton>
          <Modal.Title>FORMANDO CHILENOS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={style.description}>
            El rol del sector privado es fundamental en la tarea de alinear los requerimientos del
            mundo productivo con el proceso formativo de los jóvenes para lograr buena formación y
            empleabilidad. En esta sección encontrarás los resultados del estudio realizado por la Fundación
            Chile con el fin de identificar y hacer un balance de las iniciativas del sector privado en la formación
            para el trabajo.
          </p>
          <hr />
          <Row>
            <Col xs={6} md={3}>
              <Image src={imgRoles} alt="242x200" />
              <p style={style.title}>ROL DE LOS SECTORES PRODUCTIVOS</p>
              <OverlayTrigger placement="top" overlay={<Popover id="tooltip">En proceso...</Popover>}>
                <p><a style={style.item}>Informe Final</a></p>
              </OverlayTrigger>
              <hr style={style.hr} />
              <p><a style={style.item} onClick={() => window.open(pdf1)}>Presentación Resumen</a></p>
              <hr style={style.hr} />
              <OverlayTrigger placement="top" overlay={<Popover id="tooltip">En proceso...</Popover>}>
                <p><a style={style.item}>Infografía resultados informe</a></p>
              </OverlayTrigger>
              <hr style={style.hr} />
            </Col>
            <Col xs={6} md={3}>
              <Image src={imgEstudios} alt="242x200" />
              <p style={style.title}>ESTUDIO DE FUERZA LABORAL</p>
              <p><a style={style.item} target="_blank" href="http://www.consejominero.cl/wp-content/uploads/2016/04/Estudio-Fuerza-Laboral-de-la-Gran-Miner%C3%ADa-2015-2024.pdf">Sector Minería</a></p>
              <hr style={style.hr} />
              <p><a style={style.item} target="_blank" href="http://www.corma.cl/_file/material/estudio-fuerza-laboral-de-la-industria-forestal-chilena-2015-2030_-diagnostico-y-recomendaciones.pdf">Sector Forestal</a></p>
              <hr style={style.hr} />
              <OverlayTrigger placement="top" overlay={<Popover id="tooltip">En proceso...</Popover>}>
                <p><a style={style.item}>Sector Acuícola</a></p>
              </OverlayTrigger>
              <hr style={style.hr} />
              <OverlayTrigger placement="top" overlay={<Popover id="tooltip">En proceso...</Popover>}>
                <p><a style={style.item}>Sector Vitivinícola</a></p>
              </OverlayTrigger>
              <hr style={style.hr} />
              <OverlayTrigger placement="top" overlay={<Popover id="tooltip">En proceso...</Popover>}>
                <p><a style={style.item}>Sector Comercio</a></p>
              </OverlayTrigger>
              <hr style={style.hr} />
            </Col>
            <Col xs={6} md={3}>
              <Image src={imgMarcos} alt="242x200" />
              <p style={style.title}>MARCOS DE CUALIFICACIONES</p>
              <p style={style.itemS}>Consejo de Competencias Minero</p>
              <div style={{ display: 'flex', alignItems: 'baseline' }}>1.<a style={style.item2} onClick={() => window.open(pdf2)}>Introducción</a></div>
              <hr style={style.hr} />
              <div style={{ display: 'flex', alignItems: 'baseline' }}>2.<a style={style.item2} onClick={() => window.open(pdf3)}>Procesos de extracción</a></div>
              <hr style={style.hr} />
              <div style={{ display: 'flex', alignItems: 'baseline' }}>3.<a style={style.item2} onClick={() => window.open(pdf4)}>Procesamiento de cobre, oro y plata</a></div>
              <hr style={style.hr} />
              <div style={{ display: 'flex', alignItems: 'baseline' }}>4.<a style={style.item2} onClick={() => window.open(pdf5)}>Proceso de Mantenimiento</a></div>
              <hr style={style.hr} />
              <p onClick={() => window.open(pdf6)}><a style={style.item}>ChileValora</a></p>
              <hr style={style.hr} />
            </Col>
            <Col xs={6} md={3}>
              <Image src={imgPerfiles} alt="242x200" />
              <p style={style.title}>PERFILES LABORALES</p>
              <p><a style={style.item} target="_blank" href="http://www.chilevalora.cl/buscador/index.php/PerfilCompetencia/index">Buscador de perfiles ChileValora</a></p>
              <hr style={style.hr} />
              <p style={style.item}>Sector Forestal</p>
              <hr style={style.hr} />
              <div style={{ height: 150, overflowY: 'scroll' }}>
                <div style={{ display: 'flex', alignItems: 'baseline' }}>
                  <p style={style.number}>1.</p>
                  <div>
                    <p style={{ marginBottom: 0 }}><a style={style.itemTitle}>Subsector Bosques</a></p>
                    <p style={{ marginBottom: 0 }}><a style={style.item4} href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areabosque/Perfil_ocupacional_APLICADOR_DE_HERBICIDAS.pdf">Aplicador de Herbicida</a></p>
                    <p style={{ marginBottom: 0 }}><a style={style.item4} href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areabosque/Perfil_ocupacional_JEFE_DE_FAENA_SILVICOLA.pdf">Jefe de Faena Silvícola</a></p>
                    <p style={{ marginBottom: 0 }}><a style={style.item4} href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areabosque/Perfil_ocupacional_OPERARIO_SILVICOLA.pdf">Operario Silvícola</a></p>
                    <p style={{ marginBottom: 0 }}><a style={style.item4} href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areabosque/Perfil_ocupacional_BRIGADISTA.pdf">Brigadista</a></p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline' }}>
                  <p style={style.number}>2.</p>
                  <div>
                    <p style={{ marginBottom: 0 }}><a style={style.itemTitle}>Subsector Producción Forestal</a></p>
                    <p style={{ marginBottom: 0 }}><a style={style.item4} href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areabosque/Perfil_ocupacional_CONTROLADOR_DE_LA_PRODUCCION.pdf">Controlador de la Producción</a></p>
                    <p style={{ marginBottom: 0 }}><a style={style.item4} href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areabosque/Perfil_ocupacional_MOTOSIERRISTA.pdf">Motosierrista</a></p>
                    <p style={{ marginBottom: 0 }}><a style={style.item4} href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areabosque/Perfil_ocupacional_OPERADOR_DE_MAQUINARIA_CAMINOS.pdf">Operador de Maquinaria de Caminos</a></p>
                    <p style={{ marginBottom: 0 }}><a style={style.item4} href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areabosque/Perfil_ocupacional_CONDUCTOR_FORESTAL.pdf">Conductor Forestal</a></p>
                    <p style={{ marginBottom: 0 }}><a style={style.item4} href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areabosque/Perfil_ocupacional_ESTROBERO.pdf">Estrobero</a></p>
                    <p style={{ marginBottom: 0 }}><a style={style.item4} href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areabosque/Perfil_ocupacional_OPERADOR_DE_MAQUINARIA_FORESTAL.pdf">Operador de Maquinaria Forestal</a></p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline' }}>
                  <p style={style.number}>3.</p>
                  <div>
                    <p style={{ marginBottom: 0 }}><a style={style.itemTitle}>Subsector Mantención Industrial </a></p>
                    <p style={{ marginBottom: 0 }}><a style={style.item4} href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areaindustria/Perfil_ocupacional_Maestro_Calderero.pdf">Maestro Calderero</a></p>
                    <p style={{ marginBottom: 0 }}><a style={style.item4} href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areaindustria/Perfil_ocupacional_Maestro_Electrico.pdf">Maestro Eléctrico</a></p>
                    <p style={{ marginBottom: 0 }}><a style={style.item4} href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areaindustria/Perfil_ocupacional_Maestro_Electrocontrol.pdf">Maestro Electrocontrol</a></p>
                    <p style={{ marginBottom: 0 }}><a style={style.item4} href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areaindustria/Perfil_ocupacional_Maestro_Mecanico.pdf">Maestro Mecánico</a></p>
                    <p style={{ marginBottom: 0 }}><a style={style.item4} href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areaindustria/Perfil_ocupacional_Operador_de_Maquinaria_de_Aserrio.pdf">Operador de Maquinaria Rodante en Industria Maderera</a></p>
                    <p style={{ marginBottom: 0 }}><a style={style.item4} href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areaindustria/Perfil_ocupacional_Supervisor_Electrocontrol.pdf">Supervisor Electrocontrol</a></p>
                    <p style={{ marginBottom: 0 }}><a style={style.item4} href="http://competenciaslaboralescorma.cl/documentos_SG/perfiles/areaindustria/Perfil_ocupacional_Supervisor_Mecanico.pdf">Supervisor Mecánico</a></p>
                  </div>
                </div>
              </div>
              <hr style={style.hr} />
            </Col>
          </Row>
        </Modal.Body>
        <hr style={style.divisor} />
      </Modal>
    );
  }
}
