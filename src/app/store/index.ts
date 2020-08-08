import {
  applyMiddleware,
  compose,
  createStore
} from "redux";
import { routerMiddleware } from "connected-react-router";

import createRootReducer from "./reducers";
import { history } from "./history";

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
      ),
    ),
  )
 
  return store
}

// export const store = createStore(
//   combineReducers({
//     ...reducers,
//     router: connectRouter(history)
//   }),
//   compose(
//     applyMiddleware(
//       routerMiddleware(history)
//     )
//   )
// );

// reducers.users
