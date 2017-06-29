import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export class Item extends Component {
  render() {
    const number = this.props.match.params.n;
    const item = this.props.items[number];
    if (item){
      return <div className='item'>
        <label className="item--el">{item.name}</label>
        <label className="item--el">{item.phone}</label>
      </div>
    }else{
      return <div className='item'>
        Элемент не найден. Вернуться на <Link to='/'>главную</Link>?
      </div>
    }

  }
}

function mapStateToProps(state) {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(Item);
