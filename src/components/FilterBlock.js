import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class FilterBlock extends Component {
  static propTypes = {
    changeData: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired
  }
  onChangeHandler(e) {
    this.props.changeFilter(e.target.value);
  }
  render() {
    const data = this.props.data;
    return <div>
      <label>Фильтр: </label>
      <input type='text'
        value={this.props.filter}/>
    </div>
  }
}
