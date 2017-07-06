import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";

export class FilterBlock extends Component {
  static propTypes = {
    changeFilter: PropTypes.func.isRequired,
    getItems: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
  }
  onChangeHandler(e) {
    const val = e.target.value;
    if (val){
      this.props.history.push('?search='+val);
    }else{
      this.props.history.push('/');
    }
  }
  onKeyDown(e){
    if (e.key === 'Enter'){
      this.props.getItems(this.props.filter);
    }
  }
  render() {
    return <div className='filter'>
      <label>Фильтр: </label>
      <input type='text'
        onChange={this.onChangeHandler.bind(this)}
        value={this.props.filter}
        onKeyDown={this.onKeyDown.bind(this)}/>
    </div>
  }
}

export default withRouter(FilterBlock);
