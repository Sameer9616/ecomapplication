//jshint esversion: 9
import "./App.css";
import Routes from "./Routes";
import rootReducer from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import Thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(Thunk)));

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Routes />
            </Provider>
        </div>
    );
}

export default App;
