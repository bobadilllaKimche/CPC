import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

// import { newList } from './data/listEducation';

// TODO: limitar a chile #searchbox

export default class SearchBox extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    onPlacesChanged: PropTypes.func,
    onZoomChanged: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      allLocations: '',
      currentLocation: '',
      index: '0',
      dir: [],
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.onPlacesChanged = this.onPlacesChanged.bind(this);
  }

  componentDidMount() {
    const input = ReactDOM.findDOMNode(this.refs.input);
    const defaultBounds = new window.google.maps.LatLngBounds(
      new window.google.maps.LatLng(-17.739531, -73.937988),
      new window.google.maps.LatLng(-56.127950, -69.895020)
    );
    this.searchBox = new window.google.maps.places.SearchBox(input, { bounds: defaultBounds });
    this.searchBox.addListener('places_changed', this.onPlacesChanged);
    // this.zoom = new window.google.maps.MaxZoomService();
  }

  onPlacesChanged() {
    const places = this.searchBox.getPlaces();
    if (this.searchBox.getPlaces() !== undefined) {
      this.props.onPlacesChanged(places);
    }
  }

  render() {
    return (
      <input
        ref="input"
        {...this.props}
        type="text"
      />
    );
  }
}
