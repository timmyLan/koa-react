import { actionCreator } from 'redux-action-utils';
import 'whatwg-fetch';
export const CHANGE_NAME = 'CHANGE_NAME';
export const CHANGE_HELLO = 'CHANGE_HELLO';

exports.changeName = actionCreator(CHANGE_NAME, 'name');

export function handleSubmit(data){
  return dispatch => {
    fetch('/api/form',{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json())
      .then(json => dispatch({
        type: CHANGE_HELLO,
        json
      })
    )
  }
}