import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class AddItemBlock extends Component {
  static propTypes = {
    addItem: PropTypes.func.isRequired,
    changeNewItem: PropTypes.func.isRequired,
    newItem: PropTypes.object.isRequired
  }
  addItem(e) {
    this.props.addItem(this.props.newItem);
  }
  newItemChange(prop, e) {
    this.props.changeNewItem({...this.props.newItem, [prop]:e.target.value});
  }
  render() {
    const newItem = this.props.newItem;
    return <div className='addItem'>
      <input onChange = {this.newItemChange.bind(this, 'name')} value={newItem.name}/>
      <input onChange = {this.newItemChange.bind(this, 'phone')} value={newItem.phone}/>
      <button onClick={this.addItem.bind(this)}>+</button>
    </div>
  }
}
