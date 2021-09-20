import { combineReducers } from "redux";
import cartReducer from "./Reducer/cartReducer";
const rootReducer = combineReducers({
    shop : cartReducer,
});


export default rootReducer;


