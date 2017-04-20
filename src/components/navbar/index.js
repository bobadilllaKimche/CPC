import React, { PropTypes, Component } from 'react';
import { Col, Nav, NavItem, Navbar, Collapse, Image } from 'react-bootstrap';
import pdf from '../../FTP-CPC.pdf';

import ModalYoutube from '../youtube';

import imgLogo from '../../img/logo.png';

export default class Main extends Component {

  static get propTypes() {
    return {
      router: PropTypes.object,
      location: PropTypes.object,
      title: PropTypes.string,
      width: PropTypes.int,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      openVideo: false,
    };
  }

  render() {
    const { location, width } = this.props;
    const { openVideo } = this.state;
    return (
      <Navbar collapseOnSelect style={styles.container} collapseOnSelect>
        <Col md={10} mdOffset={1} style={{ paddingLeft: 0, paddingRight: 0 }}>
          <Navbar.Header style={{ padding: '25 important', cursor: 'pointer' }} >
            <Image src={imgLogo} style={styles.logoSmall} onClick={() => this.props.router.push('/')} />
            <Navbar.Toggle />
          </Navbar.Header>
          {width > 767 ?
            <Navbar.Collapse>
              <Nav>
                <NavItem style={styles.navItem} onClick={() => this.props.router.push('plataforma')} active={location.pathname === '/plataforma' || location.pathname === 'plataforma'}>Liceos de Educación Técnica Profesional (ETP)</NavItem>
                <NavItem style={styles.navItem} onClick={() => window.open(pdf)}>
                  Iniciativas del Sector Privado
                </NavItem>
              </Nav>
              <Nav pullRight>
                {window.innerWidth < 700 ? null : <span style={styles.tutorial} />}
                <NavItem onClick={() => this.setState({ openVideo: true })} >Tutorial</NavItem>
              </Nav>
            </Navbar.Collapse>
            :
            <Navbar.Collapse>
              <Nav>
                <NavItem style={styles.navItem} onClick={() => this.props.router.push('plataforma')} active={location.pathname === '/plataforma' || location.pathname === 'plataforma'}>Liceos de Educación Técnica Profesional (ETP)</NavItem>
                <NavItem style={styles.navItem} onClick={() => window.open(pdf)}>Iniciativas del Sector Privado</NavItem>
                <NavItem onClick={() => this.setState({ openVideo: true })} >Tutorial</NavItem>
              </Nav>
            </Navbar.Collapse>
          }
        </Col>
        <ModalYoutube show={openVideo} close={() => this.setState({ openVideo: false })} />
      </Navbar>
    );
  }
}

const styles = {
  container: {
    marginBottom: 0,
    position: 'relative',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  navItem: {
    borderWidth: 1,
    borderColor: 'white',
  },
  logoSmall: {
    height: 48,
    marginTop: 6,
    paddingRight: 10,
    paddingLeft: 10,
  },
  tutorial: {
    borderLeftWidth: 1,
    borderLeftStyle: 'solid',
    borderLeftColor: '#EEEEEE',
    height: '70%',
    top: '15%',
    position: 'absolute',
  },
  construccion: {
    height: 28,
    width: 28,
    marginTop: 8,
  },
};
