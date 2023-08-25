import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function GiphyList() {


    const dispatch = useDispatch();
    const giphySearchList = useSelector((store) => store.giphySearchList)

    const [query, setQuery] = useState('')

    const getGiphs = () => {
        dispatch({type: 'UPDATE_QUERY', payload: query})
        dispatch({ type: 'FETCH_GIPHS' })
        setQuery('')
    }

    useEffect( () => {
        getGiphs
    }, [])

    return (
        <>
            <div>
                <input id="searchForm" type="text" placeholder="search" onChange={event => {
                    setQuery(event.target.value)
                }} />
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