import { combineReducers } from "redux";

import  Reducer  from "./Reducer";

//yaha loginReducer ma karli bracket ha, es liya combineReducer ka andar ma karlibracket nahi ha
const rootReducer = combineReducers({Reducer});
export default rootReducer;