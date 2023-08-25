import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function GiphyList() {


    const dispatch = useDispatch();
    const giphySearchList = useSelector((store) => store.giphySearchList)

    const getGiphs = () => {

        console.log('in getGiphs"')
        dispatch({ type: 'FETCH_GIPHS' })
    }

    console.log(giphySearchList[0].images.original.url)

    return (
        <>
            <div>
                <input id="searchForm" type="text" placeholder="search"></input>
                <button className="searchButton" onClick={getGiphs}>SEARCH</button>
            </div>
            <div>
                <img src={giphySearchList[0].images.original.url} alt="GIF" />
            </div>
        </>
    )
}

export default GiphyList;