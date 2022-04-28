import { combineReducers, createStore } from "redux";
import { tempReducer } from "./tempReducer";
import { cityReducer } from "./cityReducer";



 export default rootReducer = combineReducers({
    city: cityReducer,
    temp: tempReducer
 })

