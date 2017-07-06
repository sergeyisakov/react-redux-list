import { URL } from '../constants/Urls'

export function getItems(filter){
  return fetch(URL+'?name_like='+filter)
            .then(response => response.json() )
}

export function postItem(item){
  return fetch(URL, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  }).then(response => response )
}

export function putItem(item){
  return fetch(URL+item.id, {
    method: 'put',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  }).then(response => response )
}

export function deleteItem(id){
  return fetch(URL+id, {
    method: 'delete',
  }).then(response => response )
}
