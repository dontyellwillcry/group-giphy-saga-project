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
    console.log('yay giphySearchList be workin')
    switch (action.type) {
        case 'SET_GIPHS':
            return action.payload
        default:
            return state
    }
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
    const apiKey = process.env.GIPHY_API_KEY
    //console.log(process.env.GIPHY_API_KEY)
    try {

        const searchResponse = yield axios.get
        (`https://api.giphy.com/v1/gifs/search?q=${'puppy'}&api_key=gg2ehDK1mfjXtt3OC9UjmPK1cE6Jp2fd`)
        console.log("in fetch", searchResponse)
        yield put({ type: 'SET_GIPHS', payload: searchResponse.data })
    }
    catch (error) {
        console.log('Error fetchng search giphs', error)
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
