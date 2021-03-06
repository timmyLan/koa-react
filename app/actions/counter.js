export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
import { actionCreator } from 'redux-action-utils';


exports.decrement = actionCreator(DECREMENT_COUNTER);

export function increment(){
  return {
    type: INCREMENT_COUNTER
  }
}

export function incrementIfOdd() {
  return (dispatch, getState)=>{
    const {counter} = getState();

    if(counter % 2 === 0){
      return
    }
    dispatch(increment());
  }
}

export function incrementAsync(){
  return dispatch =>{
    setTimeout(()=>{
      dispatch(increment())
    },1000)
  }
}