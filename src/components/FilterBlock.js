import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class FilterBlock extends Component {
  static propTypes = {
    changeFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
  }
  onChangeHandler(e) {
    this.props.changeFilter(e.target.value);
  }
  render() {
    return <div className='filter'>
      <label>Фильтр: </label>
      <input type='text'
        onChange={this.onChangeHandler.bind(this)}
        value={this.props.filter}/>
    </div>
  }
}
