import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { takeLatest, put } from "redux-saga/effects";
import { Provider } from "react-redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import axios from "axios";

//middle stuff
const sagaMiddleware = createSagaMiddleware()

//reducers
const giphySearchList = (state = [], action) => {
    console.log('yay giphySearchList be workin')
    return state
}

const giphyDBList = (state = [], action) => {
    console.log('yay giphyDBList workin it')
    return state
}



//sagas
function* rootSaga() {  
    yield takeLatest('FETCH_GIPHS', fetchSearchGiphs)
}

function* fetchSearchGiphs(action) {

}

const store = createStore(
    combineReducers({
        giphySearchList,
        giphyDBList
    }),
    applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(rootSaga)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>
);
