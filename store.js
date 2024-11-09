// createStore function that initializes the store
export function createStore(reducer) {
  let state = reducer(undefined, {});
  const listeners = [];

  // getState: Returns the current state
  function getState() {
    return state;
  }

  // dispatch: Dispatches an action to update the state
  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach(listener => listener()); // this notifies all subscribers
  }

  // subscribe: Registers a listener to be notified on state changes
  function subscribe(listener) {
    listeners.push(listener);
  }

  return { getState, dispatch, subscribe };
}
