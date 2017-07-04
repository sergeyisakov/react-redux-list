import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { URL } from '../constants/Urls'
import axios from 'axios';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null
    };
  }
  componentWillMount(){
    const number = this.props.match.params.n;
    axios.get(URL+number)
    .then((res)=>{
      this.setState({item: res.data});
    }).catch(()=>{
      this.setState({item: 'not_found'});
    });
  }
  render() {
    const item = this.state.item;
    if (item==='not_found'){
      return <div className='item'>
        Элемент не найден. Вернуться на <Link to='/'>главную</Link>?
      </div>
    }
    if (item){
      return <div className='item'>
        <label className="item--el">{item.name}</label>
        <label className="item--el">{item.phone}</label>
      </div>
    }
    return null;
  }
}
