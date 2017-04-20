import React, { PropTypes, Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';
import Select from 'react-select';

import 'react-select/dist/react-select.css';
import Colors from '../../styles';

import imgPlace from '../../img/direccion.png';
import imgTasa from '../../img/tasaempleabilidad.png';
import imgSector from '../../img/sectoreconomico.png';

import SearchBox from './searchbox';

const especialidad = [
  { value: 6, label: 'Administración y Comercio' },
  { value: 1, label: 'Agropecuario' },
  { value: 10, label: 'Alimentación' },
  { value: 11, label: 'Confección' },
  { value: 5, label: 'Construcción' },
  { value: 2, label: 'Electricidad' },
  { value: 7, label: 'Gráfica' },
  { value: 13, label: 'Hotelería y Turismo' },
  { value: 9, label: 'Maderero' },
  { value: 3, label: 'Metalmecánico' },
  { value: 8, label: 'Minero' },
  { value: 12, label: 'Programas y Proyectos Sociales' },
  { value: 4, label: 'Químico' },
];

const empleabilidad = [
  { value: 0, label: '< 60%' },
  { value: 1, label: '60% - 80%' },
  { value: 2, label: '> 80%' },
  { value: 4, label: 'Sin Información' },
];

export default class NavBar extends Component {

  static get propTypes() {
    return {
      router: PropTypes.object,
      location: PropTypes.object,
      title: PropTypes.string,
      getSector: PropTypes.func,
      getEmpleabilidad: PropTypes.func,
      onPlacesChanged: PropTypes.func,
      onPlaceSearched: PropTypes.func,
      getCurrentPosition: PropTypes.func,
      width: PropTypes.int,
    };
  }

  static defaultProps = {}

  constructor(props) {
    super(props);
    this.state = {
      sector: '',
      tasa: '',
      direccion: '',
    };
    this.selectArea = this.selectArea.bind(this);
    this.selectEmpleabilidad = this.selectEmpleabilidad.bind(this);
  }

  selectArea(selected) {
    this.setState({ sector: selected });
    this.props.getSector(selected);
  }

  selectEmpleabilidad(selected) {
    this.setState({ tasa: selected });
    this.props.getEmpleabilidad(selected);
  }

  render() {
    const { sector, tasa } = this.state;
    const { width } = this.props;
    if (width > 993) {
      return (
        <Grid>
          <Col style={styles.container} xs={10} xsPull={1} className="animated fadeInDown">
            <Col md={4} mdOffset={1} style={styles.col} >
              <Col xs={10} style={styles.col}>
                <Select
                  placeholder="Sector Económico"
                  value={sector}
                  options={especialidad}
                  onChange={selected => this.selectArea(selected)}
                  style={styles.select}
                  multi
                />
              </Col>
              <Col xs={2} style={styles.col}>
                <Image style={styles.iconImg} src={imgSector} />
              </Col>
            </Col>
            <Col md={3} xs={12} style={styles.col}>
              <Col xs={10} style={styles.col}>
                <Select
                  placeholder="Tasa de Titulación"
                  value={tasa}
                  options={empleabilidad}
                  onChange={selected => this.selectEmpleabilidad(selected)}
                  style={styles.select}
                />
              </Col>
              <Col xs={2} style={styles.col}>
                <Image style={styles.iconImg} src={imgTasa} />
              </Col>
            </Col>
            <Col md={4} xs={12} style={styles.col}>
              <Col xs={10} style={styles.col}>
                <SearchBox style={styles.searchBox} onPlacesChanged={item => this.props.onPlaceSearched(item[0])} placeholder={'Provincia, Ciudad, Región o Nombre del liceo'} />
              </Col>
              <Col xs={2} style={styles.colClickeable} onClick={() => this.props.getCurrentPosition()}>
                <Image style={styles.iconImgFind} src={imgPlace} />
              </Col>
            </Col>
          </Col>
        </Grid>
      );
    } else {
      return (
        <Grid fluid >
          <Col style={styles.containerR} xs={12}>
            <Col md={4} mdOffset={1} style={styles.col} >
              <Col xs={10} style={styles.col}>
                <Select
                  placeholder="Sector Económico"
                  value={sector}
                  options={especialidad}
                  onChange={selected => this.selectArea(selected)}
                  style={styles.select}
                  multi
                />
              </Col>
              <Col xs={2} style={styles.col}>
                <Image style={styles.iconImg} src={imgSector} />
              </Col>
            </Col>
            <Col md={3} xs={12} style={styles.col}>
              <Col xs={10} style={styles.col}>
                <Select
                  // name="form-field-name"
                  placeholder="Tasa de Titulación"
                  value={tasa}
                  options={empleabilidad}
                  onChange={selected => this.selectEmpleabilidad(selected)}
                  style={styles.select}
                />
              </Col>
              <Col xs={2} style={styles.col}>
                {/* <FaBriefcase size={25} style={styles.icon} /> */}
                <Image style={styles.iconImg} src={imgTasa} />
              </Col>
            </Col>
            <Col md={4} xs={12} style={styles.col}>
              <Col xs={10} style={styles.col}>
                <SearchBox style={styles.searchBox} onPlacesChanged={item => this.props.onPlaceSearched(item[0])} placeholder={'Provincia, Ciudad, Región o Nombre del liceo'} />
              </Col>
              <Col xs={2} style={styles.colClickeable} onClick={() => this.props.getCurrentPosition()}>
                {/* <MdPlace size={25} style={styles.icon} /> */}
                <Image style={styles.iconImgFind} src={imgPlace} />
              </Col>
            </Col>
          </Col>
        </Grid>
      );
    }
  }
}

const styles = {
  container: {
    backgroundColor: Colors.SOFTPURPLE,
    color: '#fafafb',
    position: 'fixed',
    top: 76,
    zIndex: 5,
  },
  containerR: {
    backgroundColor: Colors.SOFTPURPLE,
    color: '#fafafb',
  },
  select: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    justifyContent: 'flex-start',
  },
  icon: {
    margin: 5,
  },
  col: {
    padding: 2,
  },
  colClickeable: {
    cursor: 'pointer',
    padding: 0,
  },
  searchBox: {
    color: '#a0e00f',
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderBottomWidth: 1,
    width: '100%',
    borderColor: 'transparent',
    borderBottomColor: '#fafafb',
    paddingTop: 8,
    paddingHorizontal: 5,
  },
  iconImg: {
    height: 35,
  },
  iconImgFind: {
    height: 32,
    marginTop: 5,
  },
  logo: {
    padding: 5,
    backgroundColor: Colors.SOFTPURPLE,
    position: 'fixed',
    top: 0,
    left: 100,
    height: 125,
  },
  logoDiv: {
  },
};
