import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class ItemsBlock extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    changeableItem: PropTypes.number.isRequired,
    changeChangeableItem: PropTypes.func.isRequired,
    removeItem: PropTypes.func.isRequired,
    changeItem: PropTypes.func.isRequired,
    saveData: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired
  }
  onRemoveItem(id, e) {
    this.props.removeItem(id);
  }
  changeChangeableItem(id, e){
    if (isFocusInCurrentTarget(e)) {
       return;
    }
    this.props.changeChangeableItem(id);
  }
  changePropItem(item, prop, e){
    this.props.changeItem({...item, [prop]:e.target.value});
    this.props.saveData();
  }
  render() {
    const _this = this;
    const changeableItem = this.props.changeableItem;
    const filter = this.props.filter;
    const items = this.props.items.map(function(item) {
      var reg = new RegExp (filter,'i');
      if (reg.test(item.name)){
        if (item.id!==changeableItem){
          return <div
              tabIndex= "-1"
              className='item'
              key={item.id}
              onClick={_this.changeChangeableItem.bind(_this, item.id)}>
              <label className="item--el">{item.name}</label>
              <label className="item--el">{item.phone}</label>
              <button onClick={_this.onRemoveItem.bind(_this, item.id)}>X</button>
          </div>
        }else{
          return <div
            tabIndex= "-1"
            autoFocus
            className='item'
            key={item.id}
            onBlur={_this.changeChangeableItem.bind(_this, -1)}>
              <input type='text'
                className="item--el"
                value={item.name}
                onChange={_this.changePropItem.bind(_this, item, 'name')}/>
              <input type='text'
                className="item--el"
                value={item.phone}
                onChange={_this.changePropItem.bind(_this, item, 'phone')}/>
                <button onClick={_this.onRemoveItem.bind(_this, item.id)}>X</button>
          </div>
        }
      }else {
        return null;
      }
    })
    return <div className='items'>
      {items}
    </div>
  }
}

function isFocusInCurrentTarget ({ relatedTarget, currentTarget }) {
  if (relatedTarget === null || relatedTarget === undefined) return false;
  var node = relatedTarget.parentNode;
  while (node !== null) {
    if (node === currentTarget) return true;
    node = node.parentNode;
  }
  return false;
}
