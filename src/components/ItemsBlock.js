import React, { Component } from 'react'
import PropTypes from 'prop-types';
import * as Actions from '../actions/Actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

export class ItemsBlock extends Component {
  removeItem(id, e) {
    this.props.actions.removeItem(id);
  }
  changeChangeableItem(id, e){
    if (isFocusInCurrentTarget(e)) {
       return;
    }
    this.props.actions.changeChangeableItem(id);
  }
  endEditingItem(item){
    this.props.actions.endEditingItem(item);
  }
  changePropItem(item, prop, e){
    this.props.actions.changeItem({...item, [prop]:e.target.value});
  }
  onKeyDown(item, e){
    if (e.key === 'Enter'){
      this.props.actions.endEditingItem(item);
      this.props.actions.changeChangeableItem(-1);
    }
  }
  render() {
    const _this = this;
    const changeableItem = this.props.changeableItem;
    const items = this.props.items.map(function(item) {
      if (item.id!==changeableItem){
        return <div
            tabIndex= "-1"
            className='item'
            key={item.id}
            onClick={_this.changeChangeableItem.bind(_this, item.id)}>
            <label className="item--el">{item.name}</label>
            <label className="item--el">{item.phone}</label>
            <button onClick={_this.removeItem.bind(_this, item.id)}>X</button>
        </div>
      }else{
        return <div
          tabIndex= "-1"
          autoFocus
          className='item'
          key={item.id}
          onBlur={_this.changeChangeableItem.bind(_this, -1)}
          onKeyDown={_this.onKeyDown.bind(_this, item)}>
            <input type='text'
              className="item--el"
              value={item.name}
              onChange={_this.changePropItem.bind(_this, item, 'name')}
              onBlur={_this.endEditingItem.bind(_this, item)}/>
            <input type='text'
              className="item--el"
              value={item.phone}
              onChange={_this.changePropItem.bind(_this, item, 'phone')}
              onBlur={_this.endEditingItem.bind(_this, item)}/>
              <button onClick={_this.removeItem.bind(_this, item.id)}>X</button>
        </div>
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

const mapStateToProps = (state) => {
  return {
    items: state.items,
    changeableItem: state.сhangeableItem
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemsBlock);
