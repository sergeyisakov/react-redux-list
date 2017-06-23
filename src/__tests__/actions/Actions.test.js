import {changeData, validateData, saveData, loadData} from '../../actions/Actions';

import {
  CHANGE_DATA,
  VALIDATE_DATA,
  SAVE_DATA,
  LOAD_DATA
} from '../../constants/ActionTypes'

it('should create an action CHANGE_DATA', () => {
    const expectedAction = {
      type: CHANGE_DATA,
      field: 'field',
      value: 'value'
    }
    expect(changeData('value','field')).toEqual(expectedAction);
})

it('should create an action VALIDATE_DATA', () => {
    const expectedAction = {
      type: VALIDATE_DATA
    }
    expect(validateData()).toEqual(expectedAction);
})

it('should create an action SAVE_DATA', () => {
    const expectedAction = {
      type: SAVE_DATA
    }
    expect(saveData()).toEqual(expectedAction);
})

it('should create an action LOAD_DATA', () => {
    const expectedAction = {
      type: LOAD_DATA
    }
    expect(loadData()).toEqual(expectedAction);
})
