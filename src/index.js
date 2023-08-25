import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from "redux";
import { takeLatest, put } from "redux-saga/effects";
import { Provider } from "react-redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import axios from "axios";
import './index.css';

//middle stuff
const sagaMiddleware = createSagaMiddleware()

//reducers
const giphySearchList = (state = [], action) => {

    switch (action.type) {
        case 'SET_GIPHS':
            return action.payload
        default:
            return state
    }
}

const giphyDBList = (state = [], action) => {
    
    return state
}



//sagas
function* rootSaga() {
    yield takeLatest('FETCH_GIPHS', fetchSearchGiphs)
    yield takeLatest("CHANGE_CAT", changeFavCat)
}

function* fetchSearchGiphs(action) {

    try {
        const searchResponse = yield axios.get('/api/search')
        console.log('GET response', searchResponse.data.data)
        yield put({ type: 'SET_GIPHS', payload: searchResponse.data.data })
    }
    catch (error) {
        console.log('Error fetchng search giphs', error)
    }
}

function* changeFavCat(action) {

    try {
        // Using 'yield' to wait for the POST request to complete
        yield axios.put(`/favorite/${action.payload}`);
        // Dispatching an action to fetch the latest elements list
        yield put({ type: "SET_FAV" });
      } catch (error) {
        console.log("error in put", error);
      }
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
