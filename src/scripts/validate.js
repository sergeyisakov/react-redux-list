const year = new Date().getFullYear();

export function valEmpty (state){
  let nextState = {
    value: state.value,
    err: state.err
  }
  if (state.value===''){
    nextState.err='Поле должно быть заполнено';
  }
  return nextState;
}

export function valMask (state, re, length, err){
  let nextState = {
    value: state.value,
    err: state.err
  }
  const val = state.value;
  if (!re.test(val)||val.length!==length) {
      nextState.err=err;
  }
  return nextState;
}

export function valDate(state){
  let nextState = {
    value: state.value,
    err: state.err
  }
  const val = state.value;
  if (!/\d\d\.\d\d\.\d\d\d\d/.test(val)||val.length!==10) {
    nextState.err='Введите дату в формате ДД.ММ.ГГГГ';
  }else if (val.substr(0,2)>31){
    nextState.err='Число введено не верно';
  }else if (val.substr(3,2)>12){
    nextState.err='Месяц введен не верно';
  }else if (val.substr(6,4)>year){
    nextState.err='Год введен не верно';
  }
  return nextState;
}
