import { createStore } from "redux";
import a from "./Geoloaction";

const cityReducer = (state = a, action) =>{
    switch (action.type) {
        default:
            return state;
    }
}
const store = createStore(cityReducer)

export default store;