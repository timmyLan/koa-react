import {CHANGE_NAME, CHANGE_HELLO} from '../actions/form';
const initState ={
  name : '',
  hello: ''
}
export default function form(state = initState,action){
  switch (action.type){
    case CHANGE_NAME:
      return {...state,name:action.name}
    case CHANGE_HELLO:
      return {...state,hello:action.json.name}
    default:
      return state
  }
}