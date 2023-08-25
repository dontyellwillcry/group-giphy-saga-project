import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { takeLatest, put } from "redux-saga/effects";
import { Provider } from "react-redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import axios from "axios";
import "./index.css";

//middle stuff
const sagaMiddleware = createSagaMiddleware();

//reducers
// Holds our response from our Giphy api GET
const giphySearchList = (state = [], action) => {

  switch (action.type) {
    case "SET_GIPHS":
      return action.payload;
    default:
      return state;
  }
};
// Holds our favorites list from our favorites GET
const giphyDBList = (state = [], action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      return action.payload;
    default:
      return state;
  }
};
function* searchQuery(action) {
    console.log(action.payload)
    try {
        const searchQuery = yield axios.post('/api/search', {query: action.payload})
        
    } catch (error) {
        console.log('error posting search query', error)
    }
}

//sagas
function* rootSaga() {
  yield takeLatest("FETCH_GIPHS", fetchSearchGiphs);//Runs our GET for giphy API
  yield takeLatest("CHANGE_CAT", changeFavCat);
  yield takeLatest("ADD_FAVORITE", updateFavorite);//Runs our POST to /favorites
  yield takeLatest("GET_FAVORITE", getFavorite);
  yield takeLatest("UPDATE_QUERY", searchQuery)

}


// THIS IS OUR GIPHY GET
function* fetchSearchGiphs(action) {
  try {
    const searchResponse = yield axios.get("/api/search");
    console.log("in fetch", searchResponse);
    yield put({ type: "SET_GIPHS", payload: searchResponse.data });
  } catch (error) {
    console.log("Error fetchng search giphs", error);
  }
}
// THIS IS OUR FAVORITES GET
function* getFavorite(action) {
  try {
    const searchResponse = yield axios.get("/favorites");
    console.log("in fetch", searchResponse);
    yield put({ type: "SET_FAVORITE", payload: searchResponse.data });
  } catch (error) {
    console.log("Error fetchng search giphs", error);
  }
}
// THIS IS OUR FAVORITES POST
function* updateFavorite(action) {
  try {
    // Using 'yield' to wait for the POST request to complete
    yield axios.post("/favorites", action.payload);
    // Dispatching an action to fetch the latest elements list
    yield put({ type: "GET_FAVORITE" });
  } catch (error) {
    console.log("error posting a basket", error);
  }
}
// THIS IS OUR FAVORITES PUT
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
        giphyDBList,
    }),
    applyMiddleware(sagaMiddleware, logger)
)


sagaMiddleware.run(rootSaga);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
