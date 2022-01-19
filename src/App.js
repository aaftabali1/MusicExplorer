import React ,{ Component } from "react";
import rootReducer from "./Modules";
import Screens from "./Navigation";
import thunk from "redux-thunk";
import { createStore,applyMiddleware } from "redux";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";

/* Redux initial State */
const initialState = {};
/* Adding middleware here */
const middleware = [thunk];

export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default class App extends Component{
  
  render(){
    return (
      <Provider store={store}>
        <NavigationContainer>
        <Screens/>
        </NavigationContainer>
      </Provider>
    );
  }
}