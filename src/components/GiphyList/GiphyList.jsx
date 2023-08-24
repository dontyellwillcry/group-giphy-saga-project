import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function GiphyList() {
    console.log("in GiphyList TADA")

    const dispatch = useDispatch();
    const giphySearchList = useSelector((store) => store.giphySearchList)

    //let testGiph = giphySearchList.data
    //console.log("?",giphySearchList.data)
    //console.log("gSL",giphySearchList.data.data[0].id)
    // useEffect(() => {
    //     // getGiphs()
    // }, [])

    const getGiphs = () => {

        console.log('in getGiphs"')
        dispatch({ type: 'FETCH_GIPHS' })
        

    }


    return (
        <>
            <div>
                <input id="searchForm" type="text" placeholder="search"></input>
                <button className="searchButton" onClick={getGiphs}>SEARCH</button>
            </div>
            <div>
                <img src={giphySearchList.data[1].url} alt="GIF" />
            </div>
        </>
    )
}

export default GiphyList;