import React, { PropTypes, Component } from 'react';
import { Grid, Col, Button, Image, Collapse, Row } from 'react-bootstrap';
import renderIf from 'render-if';
// import pdf from '../../FTP-CPC.pdf';
import { LinkContainer } from 'react-router-bootstrap';

import imgUrl from '../../img/fondosearch.png';
import imgLogo from '../../img/logoPrincipal.png';
import imgDerecha from '../../img/botonDerechaMain.png';
import imgIzquierda from '../../img/botonIzquierdaMain.png';
import masInfo from '../../img/botonmasinfo.png';

import iconAlianza from './img/alianza.png';
import iconCalidad from './img/calidad.png';
import iconExperiencia from './img/experiencia.png';
import iconFormacion from './img/formacion.png';

import Colors from '../../styles';
import FaPlay from 'react-icons/lib/fa/play';

export default class AppSelector extends Component {

  static get propTypes() {
    return {
      router: PropTypes.object,
      width: PropTypes.number,
      height: PropTypes.number,
      openVideo: PropTypes.func,
      openEA: PropTypes.func,
      openFormando: PropTypes.func,
      openCapacitar: PropTypes.func,
      openFortaleciendo: PropTypes.func,
      openExperiencia: PropTypes.func,
    };
  }

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
      timer: false,
      openVideo: false,
      subSections: false,
      openModal: false,
      styles: {
        imageBotonInfo: {
          cursor: 'pointer',
          height: 40,
        },
        imageBoton: {
          cursor: 'pointer',
          // marginBottom: 15,
          height: 130,
        },
        imageBotonR: {
          cursor: 'pointer',
          marginBottom: 15,
          height: 130,
        },
        iconName: {
          marginTop: 10,
          minHeight: 30,
          color: '#fafafb',
        },
        iconNameResponsive: {
          color: '#fafafb',
          padding: 10,
        },
        info: {
          marginTop: 5,
          color: '#eae8e6',
          fontStyle: 'italic',
          // textAlign: 'justify',
          lineHeight: 1,
          fontWeight: '100',
        },
        modalTitle: {
          display: 'flex',
          justifyContent: 'space-between',
        },
        button: {
          backgroundColor: Colors.SOFTGRAY,
          borderRadius: 50,
          borderColor: Colors.GRAY,
        },
        lateralLogo: {
          paddingTop: '40%',
        },
        lateralLogoResponsive: {
          marginTop: '30%',
          marginBottom: '20%',
        },
        construccion: {
          height: 28,
          width: 28,
          marginTop: 8,
        },
      },
    };
  }

  componentWillMount() {
    setTimeout(() => this.setState({ timer: true }), 800);
  }

  renderIcons() {
    const { width } = this.props;
    const isDesktop = width > 993;
    return (
      <div className="animated fadeInLeftSmall" style={{ marginBottom: -165 }}>
        <div style={{ display: 'inline-block', position: 'relative', bottom: isDesktop ? 165 : 150, left: isDesktop ? 130 : 175, textAlign: 'left' }}>
          <div onClick={() => this.props.openFormando()} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'white', fontStyle: 'italic' }}>
            <Image src={iconFormacion} />
            <p style={{ marginLeft: 5, marginBottom: 0, lineHeight: 1 }}>Formando chilenos</p>
          </div>
          <div onClick={() => this.props.openFortaleciendo()} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'white', fontStyle: 'italic', position: 'relative', bottom: 5, left: 30 }}>
            <Image src={iconAlianza} />
            <p style={{ marginLeft: 5, marginBottom: 0, lineHeight: 1 }}>Fortaleciendo la<br />formación técnica</p>
          </div>
          <div onClick={() => this.props.openCapacitar()} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'white', fontStyle: 'italic', position: 'relative', bottom: 5, left: isDesktop ? 40 : 30 }}>
            <Image src={iconCalidad} />
            <p style={{ marginLeft: 5, marginBottom: 0, lineHeight: 1 }}>Capacitar con calidad</p>
          </div>
          <div onClick={() => this.props.openExperiencia()} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'white', fontStyle: 'italic', position: 'relative', bottom: 5, left: isDesktop ? 25 : 0 }}>
            <Image src={iconExperiencia} />
            <p style={{ marginLeft: 5, marginBottom: 0, lineHeight: 1 }}>Experiencias sectoriales</p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { subSections, styles } = this.state;
    const { width, height } = this.props;
    const container = {
      backgroundImage: `url(${imgUrl})`,
      minHeight: height - 110,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      alignItems: 'center',
      display: 'flex',
    };
    if (width > 993) {
      return (
        <Grid fluid style={container}>
          <Col mdOffset={2} md={8} xsOffset={1} xs={10} >
            <center>
              <Row>
                {renderIf(this.state.timer)(
                  <Col md={3} style={{ padding: 0 }} >
                    <div className="animated fadeInRight" style={styles.lateralLogo} >
                      <center>
                        <LinkContainer to="/plataforma" style={styles.imageBoton}>
                          <Image src={imgIzquierda} />
                        </LinkContainer>
                      </center>
                      <h4 style={styles.iconName}>Liceos de Educación Técnica Profesional (ETP)</h4>
                      <Image src={masInfo} responsive style={styles.imageBotonInfo} onClick={() => this.setState({ openPI: !this.state.openPI })} />
                      <Collapse in={this.state.openPI}>
                        <Col md={12} style={styles.info} >
                          En esta sección encontrarás un mapa con Liceos de Educación Técnica Profesional asociados a la CPC a lo largo del país y sus principales características.
                        </Col>
                      </Collapse>
                      <Button onClick={() => this.props.openVideo()} bsStyle="link" style={{ marginTop: '5%' }} className="animated fadeInDown" >
                        <FaPlay /> Ver VideoTutorial
                      </Button>
                    </div>
                  </Col>
                )}
                <Col md={this.state.timer ? 6 : 12}>
                  <Image src={imgLogo} style={{ maxHeight: height * 0.5, marginLeft: this.state.timer ? '16%' : '8%' }} responsive className="animated fadeInDown" />
                </Col>
                {renderIf(this.state.timer)(
                  <Col md={3} style={{ padding: 0 }} >
                    <div className="animated fadeInLeft" style={styles.lateralLogo}>
                      <center >
                        <Image src={imgDerecha} style={styles.imageBoton} onMouseEnter={() => this.setState({ subSections: true })} />
                      </center>
                      {subSections && this.renderIcons()}
                      <h4 style={styles.iconName}>Iniciativas del Sector Privado</h4>
                      <Image src={masInfo} style={styles.imageBotonInfo} onClick={() => this.setState({ openEA: !this.state.openEA })} />
                      <Collapse in={this.state.openEA}>
                        <Col md={12} style={styles.info} >
                          En esta sección encontrarás información sobre iniciativas que se desarrollan desde el sector privado para mejorar la formación de capital humano.
                        </Col>
                      </Collapse>
                    </div>
                  </Col>
                )}
              </Row>
            </center>
          </Col>
        </Grid>
      );
    } else {
      return (
        <Grid fluid style={container}>
          <Col xsOffset={1} xs={10} >
            <center style={{ marginTop: 20 }}>
              <div style={styles.lateralLogoResponsive} >
                <Image src={imgIzquierda} responsive style={styles.imageBotonR} onClick={() => this.props.router.push('plataforma')} />
                <h4 style={styles.iconNameResponsive}>Liceos de Educación Técnica Profesional (ETP)</h4>
                <Image src={masInfo} responsive style={styles.imageBotonInfo} onClick={() => this.setState({ openPI: !this.state.openPI })} />
                <Button onClick={() => this.props.openVideo()} bsStyle="link" style={{ marginTop: '5%' }} className="animated fadeInDown" >
                  <FaPlay /> Ver VideoTutorial
                </Button>
                <Collapse in={this.state.openPI}>
                  <Col md={12} style={styles.info} >
                    En esta sección encontrarás un mapa con Liceos de Educación Técnica Profesional asociados a la CPC a lo largo del país y sus principales características.
                  </Col>
                </Collapse>
              </div>
              <Image src={imgLogo} style={{ maxHeight: height * 0.5, marginLeft: '10%' }} responsive />
              <div style={styles.lateralLogoResponsive}>
                <center >
                  <Image src={imgDerecha} style={styles.imageBoton} onClick={() => this.setState({ subSections: true })} />
                </center>
                {subSections && this.renderIcons()}
                <h4 style={styles.iconNameResponsive}>Iniciativas del sector privado</h4>
                <Image src={masInfo} style={styles.imageBotonInfo} onClick={() => this.setState({ openEA: !this.state.openEA })} />
                <Collapse in={this.state.openEA}>
                  <Col md={12} style={styles.info} >
                    En esta sección encontrarás información sobre iniciativas que se desarrollan desde el sector privado para mejorar la formación de capital humano.
                  </Col>
                </Collapse>
              </div>
            </center>
          </Col>
        </Grid>
      );
    }
  }
}
