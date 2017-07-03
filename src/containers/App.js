import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AddItemBlock from '../components/AddItemBlock'
import ItemsBlock from '../components/ItemsBlock'
import FilterBlock from '../components/FilterBlock'
import * as Actions from '../actions/Actions'

export class App extends Component {
  componentWillMount(){
    const { history } = this.props;
    this.unsubscribeFromHistory = history.listen(this.handleLocationChange);
    this.handleLocationChange(history.location);

  }
  componentWillUnmount() {
    if (this.unsubscribeFromHistory) this.unsubscribeFromHistory();
  }
  handleLocationChange = (location) => {
    let search = this.props.location.search;
    if (search && search.substring(0, 8)==='?search='){
      search=search.substring(8);
      if (search && search!==this.props.data.filter){
        const {changeFilter} = this.props.actions;
        changeFilter(search);
      }
    }
  }
  render() {
    const items = this.props.data.items;
    const newItem = this.props.data.newItem;
    const changeableItem = this.props.data.сhangeableItem;
    const filter = this.props.data.filter;
    const {
      addItem,
      saveData,
      removeItem,
      changeItem,
      changeChangeableItem,
      changeNewItem,
      changeFilter
    } = this.props.actions;
    return <div className='app'>
      <FilterBlock
        changeFilter={ changeFilter }
        filter={filter}
      />
      <label className="item--el">Имя</label>
      <label className="item--el">Телефон</label>
      <AddItemBlock
        addItem={ addItem }
        changeNewItem={changeNewItem}
        newItem={newItem}
        saveData = {saveData}
      />
      <ItemsBlock/>
    </div>
  }
}

function mapStateToProps(state) {
  return {
    data: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);