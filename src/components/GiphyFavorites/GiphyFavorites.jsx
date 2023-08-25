import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter as Router, Route, Link } from "react-router-dom";


function GiphyFavorites() {
    const dispatch = useDispatch();
    const FavList = useSelector((store) => store.GiphList);

    const changeCategory = () => {
        dispatch({
          type: "CHANGE_CAT",
          // payload: {gif.id,cat.id}
        });
      };

    return (<>
    <Link to="/">🔙 Go Back To Search Giphs</Link>
    <h1>Inside of Gfaves</h1>
            {/* <li> .map over FavList here </li> 
            <input type="dropdown"/> for category*/}
    </>)
}


export default GiphyFavorites;