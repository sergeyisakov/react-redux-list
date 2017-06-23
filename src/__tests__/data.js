let date = new Date();
date=('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear();

export const state = {
  place: {
    value: 'г. Москва',
    err:''
  },
  period: {
    value: 'три года',
    err:''
  },
  owner_name:{
    value: 'Беляев Андрей Викторович',
    err:''
  },
  owner_address:{
    value: 'г. Москва, ул. Матросова, д. 15, кв. 56',
    err:''
  },
  owner_passport_ser:{
    value: '4598',
    err:''
  },
  owner_passport_num:{
    value: '681748',
    err:''
  },
  owner_passport_org:{
    value: 'ОВД "Войковский" г. Москвы',
    err:''
  },
  owner_passport_date:{
    value: '20.06.2002',
    err:''
  },

  agent_name:{
    value: 'Петрову Александру Николаевичу',
    err:''
  },
  agent_address:{
    value: 'г. Москва, ул. Лазарева, д. 25/2, кв. 154',
    err:''
  },
  agent_passport_ser:{
    value: '6102',
    err:''
  },
  agent_passport_num:{
    value: '612001',
    err:''
  },
  agent_passport_org:{
    value: 'ОВД "Крылатское" г. Москвы',
    err:''
  },
  agent_passport_date:{
    value: '08.05.2003',
    err:''
  },

  auto_model:{
    value: 'Volkswagen Golf',
    err:''
  },
  auto_num:{
    value: 'у232во77',
    err:''
  },
  auto_VIN:{
    value: 'WVWZZZ18ZHW975078',
    err:''
  },
  auto_color:{
    value: 'белый (серебристый)',
    err:''
  },
  auto_year:{
    value: '1998',
    err:''
  },
  auto_engine:{
    value: '34082171',
    err:''
  },
  auto_chassis:{
    value: '2342342',
    err:''
  },
  auto_body:{
    value: '18ZHW975078',
    err:''
  },
  auto_pasport_ser:{
    value: '3423',
    err:''
  },
  auto_pasport_num:{
    value: '234233',
    err:''
  },
  auto_reg_ser:{
    value: '2343',
    err:''
  },
  auto_reg_num:{
    value: '234323',
    err:''
  },
  auto_reg_org:{
    value: '5 отд. МОТОТРЭР ГИБДД САО г. Москвы',
    err:''
  },
  auto_reg_date:{
    value: '03.10.1998',
    err:''
  }
};

test('', () => {
  
});
