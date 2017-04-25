import React, { PropTypes, Component } from 'react';
import { Grid, Col, Button, Image, Collapse, Row } from 'react-bootstrap';
import renderIf from 'render-if';
import pdf from '../../FTP-CPC.pdf';

import ModalYoutube from '../youtube';

import imgUrl from '../../img/fondosearch.png';
import imgLogo from '../../img/logoPrincipal.png';
import imgDerecha from '../../img/botonDerechaMain.png';
import imgIzquierda from '../../img/botonIzquierdaMain.png';
import masInfo from '../../img/botonmasinfo.png';

import Colors from '../../styles';
import FaPlay from 'react-icons/lib/fa/play';

export default class AppSelector extends Component {

  static get propTypes() {
    return {
      router: PropTypes.object,
      width: PropTypes.number,
      height: PropTypes.number,
    };
  }

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
      timer: false,
      openVideo: false,
    };
  }

  componentWillMount() {
    setTimeout(() => this.setState({ timer: true }), 800);
  }

  render() {
    const { openVideo } = this.state;
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
                  <Col md={3} xs style={{ padding: 0 }} >
                    <div className="animated fadeInRight" style={styles.lateralLogo} >
                      <center>
                        <Image src={imgIzquierda} style={styles.imageBoton} onClick={() => this.props.router.push('plataforma')} />
                      </center>
                      <h4 style={styles.iconName}>Liceos de Educación Técnica Profesional (ETP)</h4>
                      <Image src={masInfo} responsive style={styles.imageBotonInfo} onClick={() => this.setState({ openPI: !this.state.openPI })} />
                      <Collapse in={this.state.openPI}>
                        <Col md={12} style={styles.info} >
                          En esta sección encontrarás un mapa con Liceos de Educación Técnica Profesional asociados a la CPC a lo largo del país y sus principales características.
                        </Col>
                      </Collapse>
                      <Button onClick={() => this.setState({ openVideo: true })} bsStyle="link" style={{ marginTop: '5%' }} className="animated fadeInDown" >
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
                        <Image src={imgDerecha} style={styles.imageBoton} onClick={() => window.open(pdf)} />
                      </center>
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
            <ModalYoutube show={openVideo} close={() => this.setState({ openVideo: false })} onEndYoutube={() => this.setState({ openVideo: false })} />
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
                <Button onClick={() => this.setState({ openVideo: true })} bsStyle="link" style={{ marginTop: '5%' }} className="animated fadeInDown" >
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
                  <Image src={imgDerecha} style={styles.imageBoton} onClick={() => window.open(pdf)} />
                </center>
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
          <ModalYoutube show={openVideo} close={() => this.setState({ openVideo: false })} />
        </Grid>
      );
    }
  }
}

const styles = {
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
};
