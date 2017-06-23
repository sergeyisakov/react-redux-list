import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class AddItemBlock extends Component {
  static propTypes = {
    addItem: PropTypes.func.isRequired
  }
  onAddItemHandler(e) {
    this.props.addItem(this.props.newItem);
    this.props.saveData();
  }
  onNameChangeHandler(e) {
    this.props.changeNewItem({...this.props.newItem, name:e.target.value});
  }
  onPhoneChangeHandler(e) {
    this.props.changeNewItem({...this.props.newItem, phone:e.target.value});
  }
  render() {
    return <div>
      <input onChange = {this.onNameChangeHandler.bind(this)} value={this.props.newItem.name}/>
      <input onChange = {this.onPhoneChangeHandler.bind(this)} value={this.props.newItem.phone}/>
      <button onClick={this.onAddItemHandler.bind(this)}>Добавить</button>
    </div>
  }
}
