import React, { PropTypes, Component } from 'react';
import { Modal, Col, Image, OverlayTrigger, Popover } from 'react-bootstrap';
import Slider from 'react-slick';

import imgPatron from '../../img/PATRON1.png';
import imgTitulacion from '../../img/titulacion.png';
import imgOtic from '../../img/oticSofofa.jpg';

import imgFleDer from './img/flechaDer.png';
import imgFleDerHover from './img/flechaDerHover.png';
import imgFleIzq from './img/flechaIzq.png';
import imgFleIzqHover from './img/flechaIzqHover.png';

import imgConsejo from '../../img/consejo.png';
import imgConsejoHover from '../../img/consejoHover.png';
import imgVinculo from '../../img/vinculos.png';
import imgVinculoHover from '../../img/vinculosHover.png';

import botonSimce from './img/botonsimce.png';
// import botonSimceHover from './img/botonSimceHover.png';

import photoSna from './img/agriculturaeduca.jpg';
import photoAsimet from './img/asimeteditado.jpg';
import photoComeduc from './img/comeduceditado.png';
import photoCoreduc from './img/oticeditado.png';
import photoOtic from './img/oticeditado2.png';

import photoA130 from './imgColegio/A130.jpg';
import photoCBR from './imgColegio/CBR.jpg';
import photoCCD from './imgColegio/CCD.jpg';
import photoGGV from './imgColegio/GGV.jpg';
import photoInsuco2 from './imgColegio/INSUCO2.jpg';
import photoLCP from './imgColegio/LCP.jpg';
import photoLichan from './imgColegio/Lichan.jpg';
import photoML from './imgColegio/ML.jpg';
import photoPH from './imgColegio/PH.jpg';

import photoConsejo from './img/consejoeditado.png';

const imageGremios = [
  imgOtic,
  'http://www.ralempresas.cl/images/coreduc.jpg',
  'http://www.oitcinterfor.org/sites/default/files/img_entidad/SNA%20educa%20tz.jpg',
  'http://www.asimet.cl/images/logo_asimet_gde.jpg',
  'http://www.comeduc.cl/wp-content/uploads/2016/05/logo.jpg',
];

const photoGremios = [
  photoOtic,
  photoCoreduc,
  photoSna,
  photoAsimet,
  photoComeduc,
];

const photoColegios = [
  photoA130,
  photoCBR,
  photoCCD,
  photoGGV,
  photoInsuco2,
  photoLCP,
  photoLichan,
  photoML,
  photoPH,
];


const styles = {
  title: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    display: 'flex',
    marginTop: 5,
    paddingBottom: 0,
    marginLeft: 15,
  },
  direccion: {
    fontStyle: 'italic',
    fontSize: 14,
    padding: 5,
    paddingRight: 10,
  },
  modalInfo: {
    borderColor: '#D0D0D5',
    borderLeftWidth: '0.5px',
    borderLeftStyle: 'solid',
    borderRightWidth: '0.5px',
    borderRightStyle: 'solid',
    // marginLeft: 20,
  },
  separator: {
    borderColor: '#D0D0D5',
    borderLeftWidth: '1px',
    borderLeftStyle: 'solid',
    paddingLeft: 15,
    height: 280,
  },
  modalSubheader: {
    fontWeight: 'bold',
    marginBottom: 0,
  },
  modaltextInfo: {
    lineHeight: 1,
  },
  modaltextInfo2: {
    lineHeight: 1,
    color: '#2c3e50',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  infoRight: {
    backgroundColor: '#EDEDF1',
    margin: 10,
    marginTop: 15,
    padding: 5,
  },
  rowCenter: {
    alignItems: 'center',
    marginTop: 15,
  },
  imageModal: {
    height: 100,
  },
  tasa: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 0,
    textAlign: 'center',
    color: '#626183',
    justifyContent: 'center',
  },
  tasaText: {
    fontSize: 36,
    color: '#626183',
    marginLeft: 5,
  },
  tasaText2: {
    color: '#626183',
    marginLeft: 5,
    lineHeight: 1,
    textAlign: 'left',
  },
  modalFooterTitulacion: {
    paddingLeft: 20,
    paddingRight: 0,
  },
  modalFooterButtons: {
    paddingRight: 20,
    paddingLeft: 0,
  },
  footerImages2: {
    height: 90,
  },
  footerImages3: {
    height: 85,
  },
  footerImages2R: {
    height: 45,
  },
  footerImages1: {
    height: 45,
  },
  footerText: {
    color: '#2c3E50',
    lineHeight: 1,
    marginTop: 23,
    textAlign: 'left',
  },
  footerTextR: {
    color: '#2c3E50',
    lineHeight: 1,
    marginTop: 5,
    textAlign: 'left',
  },
  imageGremio: {
    height: 35,
    marginLeft: 15,
  },
  imageGremio0: {
    height: 50,
    marginLeft: 15,
  },
  photoGremios: {
    alignItems: 'center',
    display: 'flex',
    height: 280,
  },
  subheaderVinculo: {
    color: '#415161',
    fontStyle: 'italic',
    fontSize: 12,
    // fontWeight: 100,
    paddingLeft: -10,
  },
  subheaderAño: {
    fontWeight: 'normal',
  },
};

export default class ModalMap extends Component {

  static get propTypes() {
    return {
      router: PropTypes.object,
      location: PropTypes.object,
      title: PropTypes.string,
      visible: PropTypes.bool,
      actualModal: PropTypes.object,
      hideModal: PropTypes.func,
      width: PropTypes.int,
    };
  }

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
      next: false,
      prev: false,
      consejo: false,
      vinculo: false,
      simcehover: false,
    };
  }

  componentWillMount() {
    this.setState({ visible: this.props.visible });
  }

  openConsejoSi() {
    return (
      <Popover id="popover-trigger-click-root-close" title="Este Liceo cuenta con Consejo Asesor Empresarial" />
    );
  }

  openSimce() {
    const { actualModal } = this.props;
    return (
      <Popover id="popover-trigger-click-root-close">
        <div style={{ justifyContent: 'space-between', display: 'flex' }}>
          <h4>Resultados 2015</h4>
        </div>
        <hr style={{ marginTop: 5, marginBottom: 5 }} />
        <p style={styles.tasaText2}>
          Matemáticas: {actualModal.simceMatematicas}<br />
          Lenguaje: {actualModal.simceLenguaje}<br />
          Historia: {actualModal.simceHistoria}
        </p>
      </Popover>
    );
  }

  renderInfo() {
    const { actualModal, width } = this.props;
    if (width > 993) {
      return (
        <div style={{ paddingLeft: 30, paddingRight: 30 }}>
          <center style={{ display: 'flex', justifyContent: 'center', paddingTop: 20 }}>
            {actualModal.imagenColegio === '' ? null : <Image src={actualModal.imagenColegio.includes('PROPIA') ? photoColegios[actualModal.imagenColegio.split('-')[1]] : actualModal.imagenColegio} resposive height={150} style={{ padding: 15 }} />}
            {actualModal.ImagenLogo === '' ? null : <Image src={actualModal.ImagenLogo} resposive height={150} style={{ padding: 15 }} />}
          </center>
          <div style={{ marginTop: 20 }}>
            <Col xs={12} md={7} style={styles.modalInfo}>
              <div>
                <p style={styles.modalSubheader}>NÚMERO DE MATRICULADOS 2016</p>
                <p style={styles.modaltextInfo}>{actualModal.matriculados}</p>
              </div>
              <div>
                <p style={styles.modalSubheader}>SECTORES ECONÓMICOS</p>
                <p style={styles.modaltextInfo}>{actualModal.sectorEconomico}</p>
              </div>
              <div>
                <p style={styles.modalSubheader}>ESPECIALIDADES</p>
                <p style={styles.modaltextInfo}>{actualModal.especialidades}</p>
              </div>
              <div>
                <p style={styles.modalSubheader}>DEPENDENCIA</p>
                <p style={styles.modaltextInfo}>{actualModal.dependencia}</p>
              </div>
            </Col>
            <Col xs={12} md={5}>
              <Image src={imageGremios[actualModal.IDGremio]} style={actualModal.IDGremio !== 0 ? styles.imageGremio0 : styles.imageGremio} />
              <div style={styles.infoRight}>
                {actualModal.mail && actualModal.mail.includes('http') ?
                  <a href={actualModal.mail} target="_blank">
                    <p style={styles.modaltextInfo2}>Contacto</p>
                  </a>
                  :
                  <div>
                    <p style={styles.modalSubheader}>Contacto</p>
                    <p style={styles.modaltextInfo}>{actualModal.mail}</p>
                  </div>
                }
                {actualModal.web &&
                  <div>
                    <a href={actualModal.web} target="_blank"><p style={styles.modaltextInfo2}>Página Web</p></a>
                  </div>
                }
              </div>
            </Col>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <center>
            {actualModal.ImagenLogo === '' ? null : <Image src={actualModal.ImagenLogo} resposive height={150} style={{ padding: 15 }} />}
            {actualModal.imagenColegio === '' ? null : <Image src={actualModal.imagenColegio} resposive height={150} style={{ padding: 15 }} />}
          </center>
          <div style={{ marginTop: 10 }}>
            <Col xs={12} style={{ paddingLeft: 0, paddingRight: 0 }}>
              <div>
                <p style={styles.modalSubheader}>NÚMERO DE MATRICULADOS 2016 </p>
                <p style={styles.modaltextInfo}>{actualModal.matriculados}</p>
              </div>
              <div>
                <p style={styles.modalSubheader}>SECTORES ECONÓMICOS</p>
                <p style={styles.modaltextInfo}>{actualModal.sectorEconomico}</p>
              </div>
              <div>
                <p style={styles.modalSubheader}>ESPECIALIDADES</p>
                <p style={styles.modaltextInfo}>{actualModal.especialidades}</p>
              </div>
              <div>
                <p style={styles.modalSubheader}>DEPENDENCIA</p>
                <p style={styles.modaltextInfo}>{actualModal.dependencia}</p>
              </div>
              <Image src={imageGremios[actualModal.IDGremio]} style={actualModal.IDGremio !== 0 ? styles.imageGremio0 : styles.imageGremio} />
              <div>
                {actualModal.mail && actualModal.mail.includes('http') ?
                  <a href={actualModal.mail} target="_blank">
                    <p style={styles.modaltextInfo2}>Contacto</p>
                  </a>
                  :
                  <div>
                    <p style={styles.modalSubheader}>Contacto</p>
                    <p style={styles.modaltextInfo}>{actualModal.mail}</p>
                  </div>
                }
                {actualModal.web &&
                  <div>
                    <a href={actualModal.web} target="_blank"><p style={styles.modaltextInfo2}>Página Web</p></a>
                  </div>
                }
              </div>
            </Col>
          </div>
        </div>
      );
    }
  }

  renderVinculo() {
    const { actualModal } = this.props;
    if (window.innerWidth > 993) {
      return (
        <div>
          <p style={styles.subheaderVinculo}>Las siguientes empresas apoyan a este establecimiento para  su funcionamiento. El apoyo varía según cada liceo en aspectos como prácticas profesionales, programas de formación dual, charlas formativas, maquinarias y materiales, entre otros.</p>
          <div style={{ paddingLeft: 30, paddingRight: 30 }}>
            <div style={{ paddingLeft: 15, marginTop: 20 }}>
              <Col >
                <h4><strong>VÍNCULO EMPRESARIAL</strong></h4>
              </Col>
              <hr />
            </div>
            <Col xs={6} style={{ overflowY: 'auto', maxHeight: 280 }}>
              {actualModal.empresas.split('-').map(e => <p>{e}</p>)}
            </Col>
            <Col xs={6} style={styles.photoGremios} >
              <Image style={styles.separator} src={photoGremios[actualModal.IDGremio]} responsive />
            </Col>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <p style={styles.subheaderVinculo}>Las siguientes empresas apoyan a este establecimiento para  su funcionamiento. El apoyo varía según cada liceo en aspectos como prácticas profesionales, programas de formación dual, charlas formativas, maquinarias y materiales, entre otros.</p>
          <div style={{ marginTop: 25 }}>
            <Col >
              <h4><strong>VÍNCULO EMPRESARIAL</strong></h4>
            </Col>
            <hr />
          </div>
          <Col xs={12} style={{ overflowY: 'auto', maxHeight: 280, paddingLeft: 0, paddingRight: 0 }}>
            {actualModal.empresas.split('-').map(e => <p>{e}</p>)}
          </Col>
          <Col xs={12} style={styles.photoGremios} >
            <Image style={{ marginTop: 60 }} src={photoGremios[actualModal.IDGremio]} responsive />
          </Col>
        </div>
      );
    }
  }

  renderSpecial() {
    if (window.innerWidth > 993) {
      return (
        <div>
          <div style={{ paddingLeft: 30, paddingRight: 30 }}>
            <div style={{ paddingLeft: 15, marginTop: 54 }}>
              <Col >
                <h4><strong>CONSEJO ASESOR EMPRESARIAL</strong></h4>
              </Col>
              <hr />
            </div>
            <Col xs={6} style={{ overflowY: 'auto', maxHeight: 250 }}>
              <p style={{ fontWeight: 'bold' }}>Presidente</p>
              <p>Francisco Javier Núñez Cerda, Decano Facultad Ingeniería U. del Bio-Bio.</p>
              <p style={{ fontWeight: 'bold' }}>Consejeros</p>
              <p>Santiago Jara Cuevas, Constructora Santiago Jara Ltda.</p>
              <p>Ricardo Porperello Aravena, Constructora Miramar Ltda.</p>
              <p>Miguel Ángel Tarragó Cardonne, Empresa Procon S.A.</p>
              <p>Patricio Corte Farías, Constructor Civil.</p>
              <p>Nelson Benavente de Mayo, Maben Ltda.</p>
              <p>Thomas Klischies Nevermann, Subdirector académico DUOC UC Concepción.</p>
              <p>Gonzalo Olivari Alomar, Gerente de Capacitación INACAP Concepción-Talcahuano.</p>
              <p>Eduardo Rey-Aguirre, Director Sede ProAndes, Talcahuano.</p>
            </Col>
            <Col xs={6} style={styles.photoGremios} >
              <Image style={styles.separator} src={photoConsejo} responsive />
            </Col>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div style={{ marginTop: 25 }}>
            <Col >
              <h4><strong>CONSEJO ASESOR EMPRESARIAL</strong></h4>
            </Col>
            <hr />
          </div>
          <Col xs={12} style={{ overflowY: 'auto', maxHeight: 280, paddingLeft: 0, paddingRight: 0 }}>
            <p style={{ fontWeight: 'bold' }}>Presidente</p>
            <p>Francisco Javier Núñez Cerda, Decano Facultad Ingeniería U. del Bio-Bio.</p>
            <p style={{ fontWeight: 'bold' }}>Consejeros</p>
            <p>Santiago Jara Cuevas, Constructora Santiago Jara Ltda.</p>
            <p>Ricardo Porperello Aravena, Constructora Miramar Ltda.</p>
            <p>Miguel Ángel Tarragó Cardonne, Empresa Procon S.A.</p>
            <p>Patricio Corte Farías, Constructor Civil.</p>
            <p>Nelson Benavente de Mayo, Maben Ltda.</p>
            <p>Thomas Klischies Nevermann, Subdirector académico DUOC UC Concepción.</p>
            <p>Gonzalo Olivari Alomar, Gerente de Capacitación INACAP Concepción-Talcahuano.</p>
            <p>Eduardo Rey-Aguirre, Director Sede ProAndes, Talcahuano.</p>
          </Col>
          <Col xs={12} style={styles.photoGremios} >
            <Image style={{ marginTop: 60 }} src={photoConsejo} responsive />
          </Col>
        </div>
      );
    }
  }

  render() {
    const { actualModal, visible } = this.props;
    const { next, prev, consejo, vinculo } = this.state;
    if (window.innerWidth > 993) {
      return (
        <Modal
          show={visible}
          onHide={() => this.props.hideModal()}
          bsSize="large"
        >
          <Modal.Header closeButton style={{ paddingBottom: 0 }}>
            <Modal.Title style={styles.title}>
              <p>{actualModal.nombre.toUpperCase()}</p>
              <p style={styles.direccion}>{actualModal.direccion}, {actualModal.comuna}</p>
            </Modal.Title>
          </Modal.Header>
          {actualModal.empresas ?
            <Modal.Body style={{ marginLeft: 15, marginRight: 15, paddingTop: 5 }} >
              <Slider
                ref="slider"
                infinite
                speed={500}
                slideToShow
                slideToScroll
                nextArrow={<Image src={!next ? imgFleDer : imgFleDerHover} onMouseLeave={() => this.setState({ next: false })} onMouseEnter={() => this.setState({ next: true })} />}
                prevArrow={<Image src={!prev ? imgFleIzq : imgFleIzqHover} onMouseLeave={() => this.setState({ prev: false })} onMouseEnter={() => this.setState({ prev: true })} />}
              >
                {this.renderInfo()}
                {this.renderVinculo()}
                {actualModal.id === 10 && this.renderSpecial()}
              </Slider>
            </Modal.Body>
            :
            <Modal.Body>
              {this.renderInfo()}
            </Modal.Body>
          }
          <Image src={imgPatron} responsive />
          <Modal.Footer>
            <Col style={styles.modalFooterTitulacion} md={3}>
              {actualModal.tasaTitulacion &&
                <Col md={12} style={{ padding: 0, justifyContent: 'center' }}>
                  <p style={styles.tasa}>Tasa de Titulación 2016</p>
                  <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
                    <Image src={imgTitulacion} style={styles.footerImages1} />
                    <p style={styles.tasaText} >{(actualModal.tasaTitulacion * 100).toFixed(0)}%</p>
                  </div>
                </Col>
              }
            </Col>
            <Col style={styles.modalFooterButtons} md={9}>
              <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={this.openSimce()}>
                <Col md={4} style={{ flexDirection: 'row', display: 'flex', padding: 0 }} >
                  <Image src={botonSimce} onMouseOver={() => this.openSimce()} onMouseLeave={() => this.openSimce()} style={styles.footerImages3} />
                  <p style={styles.footerText} >Resultados Simce</p>
                </Col>
              </OverlayTrigger>
              {actualModal.empresas &&
                <Col md={4} style={{ flexDirection: 'row', display: 'flex', cursor: 'pointer', paddingRight: 0, paddingLeft: 0 }} onClick={() => this.refs.slider.slickGoTo(1)} onMouseLeave={() => this.setState({ vinculo: false })} onMouseEnter={() => this.setState({ vinculo: true })}>
                  <Image src={!vinculo ? imgVinculo : imgVinculoHover} style={styles.footerImages2} />
                  <p style={styles.footerText} >Vínculo Empresarial</p>
                </Col>
              }
              {actualModal.consejo.includes('http') ?
                <Col md={4} style={{ paddingRight: 0, paddingLeft: 0 }} onMouseLeave={() => this.setState({ consejo: false })} onMouseEnter={() => this.setState({ consejo: true })}>
                  <a href={actualModal.consejo} target="_blank" style={{ flexDirection: 'row', display: 'flex', cursor: 'pointer', textDecoration: 'none' }} >
                    <Image src={!consejo ? imgConsejo : imgConsejoHover} style={styles.footerImages2} />
                    <p style={styles.footerText} >Consejo Asesor Empresarial</p>
                  </a>
                </Col>
                : actualModal.consejo.length > 0 && actualModal.id !== 10 &&
                  <OverlayTrigger trigger="click" rootClose placement="top" overlay={this.openConsejoSi()}>
                    <Col md={4} style={{ flexDirection: 'row', display: 'flex', cursor: 'pointer', paddingRight: 0, paddingLeft: 0 }} onMouseLeave={() => this.setState({ consejo: false })} onMouseEnter={() => this.setState({ consejo: true })}>
                      <Image src={!consejo ? imgConsejo : imgConsejoHover} style={styles.footerImages2} />
                      <p style={styles.footerText} >Consejo Asesor Empresarial</p>
                    </Col>
                  </OverlayTrigger>
              }
              {actualModal.id === 10 &&
                <Col md={6} onMouseLeave={() => this.setState({ consejo: false })} onMouseEnter={() => this.setState({ consejo: true })} onClick={() => this.refs.slider.slickGoTo(2)}>
                  <a style={{ flexDirection: 'row', display: 'flex', cursor: 'pointer', textDecoration: 'none' }} >
                    <Image src={!consejo ? imgConsejo : imgConsejoHover} style={styles.footerImages2} />
                    <p style={styles.footerText} >Consejo Asesor Empresarial</p>
                  </a>
                </Col>
              }
            </Col>
          </Modal.Footer>
        </Modal>
      );
    } else {
      return (
        <Modal
          show={visible}
          onHide={() => this.props.hideModal()}
          bsSize="large"
          style={{ fontSize: 11 }}
        >
          <Modal.Header closeButton style={{ paddingBottom: 0 }}>
            <Modal.Title style={styles.title}>
              <p style={{ fontSize: 13 }}>{actualModal.nombre.toUpperCase()}</p>
              <p style={styles.direccion}>{actualModal.direccion}, {actualModal.comuna}</p>
            </Modal.Title>
          </Modal.Header>
          {actualModal.empresas ?
            <Modal.Body style={{ marginLeft: 15, marginRight: 15 }} >
              <Slider
                ref="slider"
                infinite
                speed={500}
                slideToShow
                slideToScroll
              >
                {this.renderInfo()}
                {this.renderVinculo()}
              </Slider>
            </Modal.Body>
            :
            <Modal.Body>
              {this.renderInfo()}
            </Modal.Body>
          }
          <Image src={imgPatron} responsive />
          <Modal.Footer>
            <Col style={styles.modalFooterTitulacion} sm={12} >
              {actualModal.tasaTitulacion &&
                <Col>
                  <p style={styles.tasa}>Tasa de Titulación 2016</p>
                  <div style={{ flexDirection: 'row', display: 'flex' }}>
                    <Image src={imgTitulacion} style={styles.footerImages1} />
                    <p style={styles.tasaText} >{(actualModal.tasaTitulacion * 100).toFixed(0)}%</p>
                  </div>
                </Col>
              }
            </Col>
            <Col sm={12}>
              <div>
                <p style={styles.tasa}>Resultados Simce</p>
                <p style={styles.tasaText2}>
                  Matemáticas: {actualModal.simceMatematicas}<br />
                  Lenguaje: {actualModal.simceLenguaje}<br />
                  Historia: {actualModal.simceHistoria}
                </p>
              </div>
            </Col>
            <Col style={styles.modalFooterButtons} sm={12}>
              {actualModal.empresas &&
                <Col sm={6} style={{ flexDirection: 'row', display: 'flex', cursor: 'pointer' }} onClick={() => this.refs.slider.slickGoTo(1)} onMouseLeave={() => this.setState({ vinculo: false })} onMouseEnter={() => this.setState({ vinculo: true })}>
                  <Image src={!vinculo ? imgVinculo : imgVinculoHover} style={styles.footerImages2} />
                  <p style={styles.footerText} >Vínculo Empresarial</p>
                </Col>
              }
              {actualModal.consejo && actualModal.consejo.includes('http') ?
                <Col sm={6} onMouseLeave={() => this.setState({ consejo: false })} onMouseEnter={() => this.setState({ consejo: true })}>
                  <a href={actualModal.consejo} target="_blank" style={{ flexDirection: 'row', display: 'flex', cursor: 'pointer', textDecoration: 'none' }} >
                    <Image src={!consejo ? imgConsejo : imgConsejoHover} style={styles.footerImages2} />
                    <p style={styles.footerText} >Consejo Asesor Empresarial</p>
                  </a>
                </Col>
                :
                <OverlayTrigger trigger="click" rootClose placement="top" overlay={this.openConsejoSi()}>
                  <Col sm={6} style={{ flexDirection: 'row', display: 'flex', cursor: 'pointer' }} onMouseLeave={() => this.setState({ consejo: false })} onMouseEnter={() => this.setState({ consejo: true })}>
                    <Image src={!consejo ? imgConsejo : imgConsejoHover} style={styles.footerImages2} />
                    <p style={styles.footerText} >Consejo Asesor Empresarial</p>
                  </Col>
                </OverlayTrigger>
              }
            </Col>
          </Modal.Footer>
        </Modal>
      );
    }
  }
}
