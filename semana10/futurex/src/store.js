import {applyMiddleware, createStore, compose} from 'redux';
import rootReducer from "../../../semana9/aula4-astromatch/astro-match/src/reducers";
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

const history = createBrowserHistory();

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(routerMiddleware(history)),
        applyMiddleware(thunk),
    )
)

export default store;