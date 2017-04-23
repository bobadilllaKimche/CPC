import React, { PropTypes, Component } from 'react';
import GoogleMap from 'google-map-react';

import { Image } from 'react-bootstrap';

import NavBar from './navBar';
import Pin from './pin';
import TableView from './tableView';
import ModalMap from './modalMap';

import RealData from './data/listEducation.json';
import { styleMap } from './data/styleMap';

import imgPosition from './img/loc.png';
import imgSearch from './img/pin.png';

const K_HEIGHT = 25;
const K_WIDTH = 25;
const K_SIZE = 25;

const KEY = 'AIzaSyDh-wPi4G-h1nfsYKuHKub1xss-6BRE9zk';

export default class Platform extends Component {

  static propTypes = {
    zoom: PropTypes.number,
    width: PropTypes.int,
    height: PropTypes.int,
  };

  static defaultProps= {
    center: { lat: -33.447487, lng: -70.673676 },
  };

  constructor(props) {
    super(props);
    this.state = {
      center: { lat: -33.447487, lng: -70.673676 },
      currentPosition: false,
      modal: false,
      actual: -1,
      listEducation: RealData,
      apiloaded: '',
      searched: '',
      mapPosition: '',
      filterSector: [],
      filterPosition: '',
      filterEmpleabilidad: null,
      hoverItem: -1,
      zoom: 4,
    };
    this.getLocation();
  }

  onChildPress(key, item) {
    this.setState({
      center: {
        lat: item.lat,
        lng: item.lng,
      },
      modal: !this.state.modal,
      actual: item.text,
    });
  }

  onSearch(searched) {
    const globalWidth = 256;
    let angle = searched.geometry.viewport.b.f - searched.geometry.viewport.b.b;
    if (angle < 0) {
      angle += 360;
    }
    const zoom = Math.round(Math.log(this.props.width * 360 / angle / globalWidth) / Math.LN2);
    this.setState({ searched, center: { lat: searched.geometry.location.lat(), lng: searched.geometry.location.lng() }, zoom });
    this.filter();
  }


  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position =>
        this.setState({
          center: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
          currentPosition: {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          },
        })
      );
    }
  }

  filter(selected, key) {
    const { filterSector, filterPosition, filterEmpleabilidad } = this.state;
    let { listEducation } = this.state;
    const nw = filterPosition.marginBounds.nw;
    const se = filterPosition.marginBounds.se;
    listEducation = RealData.filter(element =>
      nw.lng <= element.latLong.split(',')[1] && element.latLong.split(',')[1] <= se.lng
      && nw.lat >= element.latLong.split(',')[0] && element.latLong.split(',')[0] >= se.lat
    );

    if (filterSector.length > 0 || key === 1) {
      const actual = key === 1 ? selected : filterSector;
      const newList = [];
      actual.forEach(area => newList.push.apply(newList, listEducation.filter(element => element.sectorEconomico.includes(area.label))));
      listEducation = actual.length > 0 ? newList : listEducation;
    }
    if (filterEmpleabilidad !== null || key === 2) {
      const actual = key === 2 ? selected : filterEmpleabilidad;
      if (actual !== null) {
        listEducation = listEducation.filter(element => {
          if (actual.value === 0) return element.tasaTitulacion <= 0.6 && element.tasaTitulacion !== null;
          else if (actual.value === 1) return element.tasaTitulacion >= 0.6 && element.tasaTitulacion <= 0.8;
          else if (actual.value === 2) return element.tasaTitulacion >= 0.8;
          else return element.tasaTitulacion == null;
        });
      }
    }
    this.setState({ listEducation });
  }

  render() {
    const { center, currentPosition, modal, actual, listEducation, searched, hoverItem, zoom } = this.state;
    const actualModal = RealData[actual - 1];
    const { height, width } = this.props;
    if (width > 993) {
      return (
        <div style={{ height: height - 60 - 110 }}>
          <NavBar
            getSector={selected => this.setState({ filterSector: selected }, this.filter(selected, 1))}
            getEmpleabilidad={selected => {
              this.setState({ filterEmpleabilidad: selected });
              this.filter(selected, 2);
            }}
            onPlaceSearched={searchedItem => this.onSearch(searchedItem)}
            getCurrentPosition={() => this.getLocation()}
            width={width}
          />
          <TableView
            listEducation={listEducation}
            hoverItem={hoverSelected => this.setState({ hoverItem: hoverSelected })}
            clickedItem={clickedSelected => this.setState({ actual: clickedSelected, modal: !modal })}
            height={height}
            width={width}
          />
          {actual > -1 &&
            <ModalMap
              actualModal={actualModal}
              visible={modal}
              hideModal={() => this.setState({ modal: !this.state.modal, actual: -1 })}
              width={width}
            />
          }
          <GoogleMap
            bootstrapURLKeys={{
              key: KEY,
              language: 'es',
              libraries: 'places',
            }}
            defaultZoom={this.props.zoom}
            zoom={zoom}
            center={center}
            hoverDistance={K_SIZE / 2}
            onChildClick={(key, index) => this.onChildPress(key, index)}
            onGoogleApiLoaded={a => this.setState({ apiloaded: a })}
            onChange={position => { this.setState({ filterPosition: position, zoom: position.zoom }); this.filter(); }}
            yesIWantToUseGoogleMapApiInternals
            options={{ styles: styleMap }}
          >
            {currentPosition ?
              <Image
                src={imgPosition}
                lat={currentPosition.lat}
                lng={currentPosition.lng}
                style={styles.icon}
              />
              : null
            }
            {listEducation.map(place =>
              <Pin
                key={place.id}
                lat={place.latLong.split(',')[0]}
                lng={place.latLong.split(',')[1]}
                text={place.id}
                type={place.tipo}
                hover={hoverItem}
              />
            )}
            {searched ?
              <Image
                src={imgSearch}
                lat={searched.geometry.location.lat()}
                lng={searched.geometry.location.lng()}
                style={styles.icon2}
              />
              : null
            }
          </GoogleMap>
        </div>
      );
    } else {
      return (
        <div>
          <NavBar
            getSector={selected => this.setState({ filterSector: selected }, this.filter(selected, 1))}
            getEmpleabilidad={selected => {
              this.setState({ filterEmpleabilidad: selected });
              this.filter(selected, 2);
            }}
            onPlaceSearched={searchedItem => this.onSearch(searchedItem)}
            getCurrentPosition={() => this.getLocation()}
            width={width}
          />
          {actual > -1 ?
            <ModalMap actualModal={actualModal} visible={modal} hideModal={() => this.setState({ modal: !modal, actual: -1 })} />
            : null
          }
          <div style={{ height: height * 0.8 }}>
            <GoogleMap
              bootstrapURLKeys={{
                key: KEY,
                language: 'es',
                libraries: 'places',
              }}
              defaultZoom={this.props.zoom}
              zoom={zoom}
              center={center}
              hoverDistance={K_SIZE / 2}
              onChildClick={(key, index) => this.onChildPress(key, index)}
              onGoogleApiLoaded={a => this.setState({ apiloaded: a })}
              onChange={position => { this.setState({ filterPosition: position }); this.filter(); }}
              yesIWantToUseGoogleMapApiInternals
              options={{ styles: styleMap }}
            >
                {currentPosition ?
                  <Image
                    src={imgPosition}
                    lat={currentPosition.lat}
                    lng={currentPosition.lng}
                    style={styles.icon}
                  />
                  : null
                }
                {listEducation.map(place =>
                  <Pin
                    key={place.id}
                    lat={place.latLong.split(',')[0]}
                    lng={place.latLong.split(',')[1]}
                    text={place.id}
                    type={place.tipo}
                    hover={hoverItem}
                  />
                )}
                {searched ?
                  <Image
                    src={imgSearch}
                    lat={searched.geometry.location.lat()}
                    lng={searched.geometry.location.lng()}
                    style={styles.icon2}
                  />
                  : null
                }
            </GoogleMap>
          </div>
          <TableView
            listEducation={listEducation}
            hoverItem={hoverSelected => this.setState({ hoverItem: hoverSelected })}
            clickedItem={clickedSelected => this.setState({ actual: clickedSelected, modal: !modal })}
            height={height}
            width={width}
          />
        </div>
      );
    }
  }
}

const styles = {
  icon: {
    position: 'absolute',
    width: K_WIDTH,
    left: -K_WIDTH / 2,
    height: K_HEIGHT,
    top: -K_HEIGHT / 2,
    // height: 30,
  },
  icon2: {
    height: K_HEIGHT,
  },
};
