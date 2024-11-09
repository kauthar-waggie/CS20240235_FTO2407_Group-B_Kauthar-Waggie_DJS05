# Redux-Inspired Tally App

This is a simple Redux-inspired store implementation that manages the state of a tally counter. It showcases how to manage the state with actions and a reducer while logging the results to the console.

## How to Run the Code

1. **Download/Clone the repository**:
   Download or clone this repository to your local machine.
   
2. **Open the project folder**:
   Navigate to the project folder where the files are located.

3. **Open `index.html` in a browser**:
   - If you are using a local server (e.g., Live Server in VS Code), you can open `index.html` in your browser directly.
   - Alternatively, you can use any static file server to serve the project files.

4. **Check the Console**:
   Open your browser's Developer Tools (press `F12` or `Ctrl+Shift+I`), go to the **Console** tab, and you'll see the state changes as actions are dispatched.

## Overview of the Approach

In this project, I implemented a Redux-inspired store with the following features:

- **State Management**: The state is managed centrally in a store, and actions are dispatched to update the state.
- **Actions**: There are three types of actions — `ADD`, `SUBTRACT`, and `RESET` — which modify the state accordingly.
- **Reducer**: The reducer function listens for the dispatched actions and returns the updated state.
- **Subscription**: A subscriber function listens for state changes and logs the updated state to the console whenever a change occurs.

### Files:
1. **actions.js**: Defines the action types (`ADD`, `SUBTRACT`, `RESET`) and action creators.
2. **reducers.js**: Contains the `tallyReducer` function that handles state updates based on the dispatched actions.
3. **store.js**: Implements the store logic with methods `getState`, `dispatch`, and `subscribe` to interact with the state.
4. **script.js**: Handles the logic for dispatching actions and observing state changes, simulating real-world scenarios (like adding, subtracting, and resetting the counter).

## Challenges Faced and Solutions

1. **Handling state changes in a minimalistic way**:
   - Redux-inspired stores often come with boilerplate code and additional complexity. To keep it minimal, I focused only on the essentials: `getState`, `dispatch`, and `subscribe`.
   
2. **Modularizing the code**:
   - Breaking down the logic into separate files (`actions.js`, `reducers.js`, `store.js`, and `script.js`) initially caused some confusion regarding file imports. However, by following ES module standards and ensuring paths were correct, I was able to organize the project effectively.

3. **Ensuring the console output is clear**:
   - Initially, I struggled with properly logging the state at various stages. I overcame this by setting up the `subscribe` method to log the state immediately after each dispatch.

4. **Handling action dispatch and state updates**:
   - I ensured that the state was updated correctly by dispatching actions in sequence and observing changes through the subscriber function.

## Future Improvements
- Adding more features such as undo/redo functionality or persisting the state to local storage.
- Adding more complex action types and state updates, like incrementing by a variable amount or handling asynchronous actions.
