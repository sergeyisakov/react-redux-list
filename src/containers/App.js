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
    const {changeFilter, getItems} = this.props.actions;
    let search = location.search;
    if (search && search.substring(0, 8)==='?search='){
      search=search.substring(8);
      if (search && search!==this.props.data.filter){
        changeFilter(decodeURIComponent(search));
        getItems(search);
      }
    }else{
      changeFilter('');
      getItems('');
    }
  }
  render() {
    const newItem = this.props.data.newItem;
    const filter = this.props.data.filter;
    const {
      addItem,
      saveData,
      changeNewItem,
      changeFilter,
      getItems
    } = this.props.actions;
    return <div className='app'>
      <FilterBlock
        changeFilter={ changeFilter }
        getItems={getItems}
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
