// Uma sugestão para começar é criar a Store, onde ficarão armazenados os estados, importados de cada reducer.
import { createStore } from 'redux';
import { generateReducers } from './reducers';

// Como ele fará requisições assíncronas através da API, é necessário importar mais alguns métodos (?).
import { compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

// Para que cada...
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

const history = createBrowserHistory();

const store = createStore(
    generateReducers(history),
    compose(
        applyMiddleware(routerMiddleware(history)),
        applyMiddleware(thunk),
    )
)

export default store;

// Vi que criei esse arquivo a mais kkkk, ignorá-lo