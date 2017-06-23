import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class ItemsBlock extends Component {
  static propTypes = {
    changeChengeableItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    changeItem: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
  }
  onRemoveItem(id, e) {
    this.props.removeItem(id);
  }
  onChangeChangeableItem(id){
    this.props.changeChangeableItem(id);
  }
  onChangeName(item, e){
    this.props.changeItem({...item, name:e.target.value});
    this.props.saveData();
  }
  onChangePhone(item, e){
    this.props.changeItem({...item, phone:e.target.value});
    this.props.saveData();
  }
  render() {
    const _this = this;
    const changeableItem = this.props.changeableItem;
    const items = this.props.items.map(function(item) {
      if (item.id!==changeableItem){
        return <div
            className='item'
            key={item.id}
            onClick={_this.onChangeChangeableItem.bind(_this, item.id)}>
          <label className="item--el">{item.name}</label>
          <label className="item--el">{item.phone}</label>
          <button onClick={_this.onRemoveItem.bind(_this, item.id)}>X</button>
        </div>
      }else{
        return <div
          className='item'
          key={item.id}
          tabindex="-1"
          onBlur={_this.onChangeChangeableItem.bind(_this, -1)}>
          <input type='text'
            className="item--el"
            value={item.name}
            onChange={_this.onChangeName.bind(_this, item)}/>
          <input type='text'
            className="item--el"
            value={item.phone}
            onChange={_this.onChangePhone.bind(_this, item)}/>
        </div>
      }
    })
    return <div>
      {items}
    </div>
  }
}
