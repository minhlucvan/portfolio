// ------------------------------------
// Dependentcies
// ------------------------------------
import { put, takeEvery } from 'redux-saga/effects'

// ------------------------------------
// Constants
// ------------------------------------
export const SCROLL_PARALAX_CONTAINER = '[HOME] SCROLL_PARALAX_CONTAINER';


// ------------------------------------
// Actions
// ------------------------------------
export function scrollParalax (value = 1) {
  return {
    type    : SCROLL_PARALAX_CONTAINER,
    payload : value
  }
}


export const actions = {
  scrollParalax
}

// ------------------------------------
// Midlewares
// ------------------------------------


// ------------------------------------
// Action Handlers
// ------------------------------------
const scrollParalaxHander = (state, action) => {
  const scrollParalax = action.payload;
  const headerInteractive = scrollParalax <= 0;
  console.log(headerInteractive);
  const headerBlur = scrollParalax/30;
  const headerBright = (1 - scrollParalax/524);
  return {...state, scrollParalax, headerBlur, headerBright, headerInteractive};
}

const ACTION_HANDLERS = {
  [SCROLL_PARALAX_CONTAINER]: scrollParalaxHander
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  paralaxScroll: 0,
  headerBlur: 0,
  headerBright: 1,
  headerInteractive: true
}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
