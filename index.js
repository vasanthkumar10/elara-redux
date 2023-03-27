// redux -> good to know topic
// Redux -> a predictable state management tool

// managing the state -> useState and useReducer

// smaller applications -> 20-30 components or 100 states
// then simply use useContext and useReducer

// REDUX -> enterprise (large) applications
// It makes the normal code into a complex one.

// Redux -> is common tool for all the JS frameworks including vanilla JS
// react-redux -> bridge between react and redux

// --------------------------
// REDUX - 3 main principles
// --------------------------

/**
 * 1. Store -> holds the state of the entire application -> always use 1 store
 * 2. Action -> describes the event -> what happens in the component
 * 3. Reducer -> connects the component and store -> make changes in the store
 */

// Note:
// 1. The state of the entire application is stored in a single object(store)
// 2. The only way to change the state is by emitting (dispatch) an action
// 3. To specify how the state is going to change, always use reducer

const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAR = "BUY_CAR";
const SELL_CAR = "SELL_CAR";
const BUY_BIKE = "BUY_BIKE";
const SELL_BIKE = "SELL_BIKE";

// action obj -> type which specifies the action
// let obj = {
//   type: BUY_CAR,
//   payload: {
//     quantity: 1,
//     model: "Maruti",
//     year: 2023,
//   },
//   info: "Buying a car",
// };

// Action creator
function buyCar() {
  return {
    type: BUY_CAR,
    info: "Buying a car",
  };
}

function sellCar(num = 1) {
  return {
    type: SELL_CAR,
    quantity: num,
  };
}

function buyBike() {
  return {
    type: BUY_BIKE,
    info: "Buying a bike",
  };
}

function sellBike(num = 1) {
  return {
    type: SELL_BIKE,
    quantity: num,
  };
}

// initial state
// const initialState = {
//   noOfCars: 10,
//   noOfBikes: 20,
// };

const initialCarState = {
  noOfCars: 10,
};

const initialBikeState = {
  noOfBikes: 20,
};

// reducer
const carReducer = (state = initialCarState, action) => {
  switch (action.type) {
    case BUY_CAR:
      return { ...state, noOfCars: state.noOfCars - 1 };

    case SELL_CAR:
      return { ...state, noOfCars: state.noOfCars + action.quantity };

    default:
      return state;
  }
};

const bikeReducer = (state = initialBikeState, action) => {
  switch (action.type) {
    case BUY_BIKE:
      return { ...state, noOfBikes: state.noOfBikes - 1 };

    case SELL_BIKE:
      return { ...state, noOfBikes: state.noOfBikes + action.quantity };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cars: carReducer,
  bikes: bikeReducer,
});

// store
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState());
// const unsubscribe = store.subscribe(() =>
//   console.log(
//     "The store is getting updated. The new state is --> ",
//     store.getState()
//   )
// );

store.subscribe(() => {});

// components
store.dispatch(buyCar());
store.dispatch(buyCar());

store.dispatch(sellCar());
store.dispatch(sellCar(5));

store.dispatch(buyBike());
store.dispatch(buyBike());

// unsubscribe();
store.dispatch(sellBike());
store.dispatch(sellBike(5));
