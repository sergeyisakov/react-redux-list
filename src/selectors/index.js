import { createSelector } from 'reselect'

const getFilter = (state) => state.filter
const getItems = (state) => state.items

export const getVisibleItems = createSelector(
  [ getFilter, getItems ],
  (filter, items) => {
    var reg = new RegExp (filter,'i');
    return items.filter((item)=>{
      return reg.test(item.name);
    })
  }
)
