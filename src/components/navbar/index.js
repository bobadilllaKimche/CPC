import React, { PropTypes, Component } from 'react';
import { Col, Nav, NavItem, Navbar, Image, NavDropdown, MenuItem } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import imgLogo from '../../img/logo.png';

class NavBar extends Component {

  static get propTypes() {
    return {
      router: PropTypes.object,
      location: PropTypes.object,
      title: PropTypes.string,
      width: PropTypes.number,
      openVideo: PropTypes.func,
      openFormando: PropTypes.func,
      openCapacitar: PropTypes.func,
      openFortaleciendo: PropTypes.func,
      openExperiencia: PropTypes.func,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      openVideo: false,
      styles: {
        logoSmall: {
          height: 48,
          marginTop: 6,
          paddingRight: 10,
        },
        tutorial: {
          borderLeftWidth: 1,
          borderLeftStyle: 'solid',
          borderLeftColor: '#EEEEEE',
          height: '70%',
          top: '15%',
          position: 'absolute',
        },
      },
    };
  }

  render() {
    const { location, width } = this.props;
    const { styles } = this.state;
    return (
      <Navbar collapseOnSelect fixedTop fluid>
        <Col sm={10} smOffset={1}>
          <Navbar.Header style={{ cursor: 'pointer' }} >
            <Link to="/">
              <Image src={imgLogo} style={styles.logoSmall} />
            </Link>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to="plataforma" active={location.pathname === '/plataforma'}>
                <NavItem>Liceos de Educación Técnica Profesional (ETP)</NavItem>
              </LinkContainer>
              <NavDropdown title="Iniciativas del Sector Privado" id="basic-nav-dropdown">
                <MenuItem onClick={() => this.props.openFormando()}>Formando chilenos</MenuItem>
                <MenuItem onClick={() => this.props.openFortaleciendo()}>Fortaleciendo la formación técnica</MenuItem>
                <MenuItem onClick={() => this.props.openCapacitar()}>Capacitar con calidad</MenuItem>
                <MenuItem onClick={() => this.props.openExperiencia()}>Experiencias sectoriales</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              {width > 867 && <span style={styles.tutorial} />}
              <NavItem onClick={() => this.props.openVideo()} >Tutorial</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Navbar>
    );
  }
}

export default withRouter(NavBar);
