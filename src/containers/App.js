import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import AddItemBlock from '../components/AddItemBlock'
import ItemsBlock from '../components/ItemsBlock'
import FilterBlock from '../components/FilterBlock'
import * as Actions from '../actions/Actions'

export class App extends Component {
  componentDidMount() {
    const { loadData } = this.props.actions;
    loadData();
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
      <AddItemBlock
        addItem={ addItem }
        changeNewItem={changeNewItem}
        newItem={newItem}
        saveData = {saveData}
      />
      <ItemsBlock
        items={ items }
        changeableItem={changeableItem}
        changeItem={ changeItem }
        removeItem={ removeItem }
        changeChangeableItem={ changeChangeableItem }
        saveData = {saveData}
      />
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
