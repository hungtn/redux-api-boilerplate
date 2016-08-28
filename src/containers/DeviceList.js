import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeviceList from '../components/DeviceList.js';
import { getDevices } from '../actions/DeviceActions.js';
import { getAllDevices } from '../selectors/device.js';

class DeviceListContainer extends Component {
  static propTypes = {
    devices: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getDevices();
  }

  render() {
    return (
      <DeviceList
        devices={this.props.devices}
        onDeviceClick={() => console.log("toggle")}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    devices: getAllDevices(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDevices: () => dispatch(getDevices()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceListContainer);