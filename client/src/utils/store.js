//import createStore from 'redux' and the reducers from './reducers'
//setup createStore to take in the reducers and export the function

import { createStore } from "redux";
import reducers from "./reducers";

export default createStore(reducers);
