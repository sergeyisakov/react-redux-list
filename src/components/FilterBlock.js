import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";

export class FilterBlock extends Component {
  static propTypes = {
    changeFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
  }
  onChangeHandler(e) {
    const val = e.target.value;
    this.props.changeFilter(e.target.value);
    if (val){
      this.props.history.push('?search='+val);
    }else{
      this.props.history.push('/');
    }
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

export default withRouter(FilterBlock);
