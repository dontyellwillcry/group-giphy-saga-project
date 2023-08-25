import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function GiphyList() {


    const dispatch = useDispatch();
    const giphySearchList = useSelector((store) => store.giphySearchList)

    const getGiphs = () => {

        console.log('in getGiphs"')
        dispatch({ type: 'FETCH_GIPHS' })
    }

    useEffect( () => {
        getGiphs
    }, [])

    return (
        <>
            <div>
                <input id="searchForm" type="text" placeholder="search"></input>
                <button className="searchButton" onClick={getGiphs}>SEARCH</button>
            </div>
            {
                giphySearchList.map( (item => (
                    <div key={item.id}>
                        <img src={item.images.original.url} alt="GIF" />
                    </div> 
                )))
            }
            {/* */}
        </>
    )
}

export default GiphyList;