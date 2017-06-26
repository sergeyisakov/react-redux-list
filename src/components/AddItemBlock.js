import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class AddItemBlock extends Component {
  static propTypes = {
    addItem: PropTypes.func.isRequired,
    changeNewItem: PropTypes.func.isRequired,
    newItem: PropTypes.object.isRequired,
    saveData: PropTypes.func.isRequired
  }
  onAddItemHandler(e) {
    this.props.addItem();
    this.props.saveData();
  }
  onNameChangeHandler(e) {
    this.props.changeNewItem({...this.props.newItem, name:e.target.value});
  }
  onPhoneChangeHandler(e) {
    this.props.changeNewItem({...this.props.newItem, phone:e.target.value});
  }
  render() {
    const newItem = this.props.newItem;
    return <div className='addItem'>
      <input onChange = {this.onNameChangeHandler.bind(this)} value={newItem.name}/>
      <input onChange = {this.onPhoneChangeHandler.bind(this)} value={newItem.phone}/>
      <button onClick={this.onAddItemHandler.bind(this)}>+</button>
    </div>
  }
}
