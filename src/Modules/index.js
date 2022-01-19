import { combineReducers } from "redux";
import albumReducer from './Albums/reducer'
const rootReducer = combineReducers({albumReducer});
export default rootReducer;