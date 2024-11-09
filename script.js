import { createStore } from './store.js';
import { tallyReducer } from './reducers.js';
import { add, subtract, reset } from './actions.js';

// Creating store with the tallyReducer
const store = createStore(tallyReducer);

// Subscribing to state changes and logging the state
store.subscribe(() => {
  console.log('Current state:', store.getState());
});

// SCENARIO 1: Initial State Verification
console.log('SCENARIO 1: Initial State Verification');
console.log(store.getState()); 

// SCENARIO 2: Incrementing the Counter
console.log('SCENARIO 2: Incrementing the Counter');
store.dispatch(add());
store.dispatch(add());

// SCENARIO 3: Decrementing the Counter
console.log('SCENARIO 3: Decrementing the Counter');
store.dispatch(subtract());

// SCENARIO 4: Resetting the Counter
console.log('SCENARIO 4: Resetting the Counter');
store.dispatch(reset());

