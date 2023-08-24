import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

function GiphyList (){
    console.log("in GiphyList TADA")

    const dispatch = useDispatch();
    const giphySearchList = useSelector((store) => store.giphySearchList)

    useEffect(() => {
        // getGiphs()
    }, [])

    const getGiphs = () => {
        dispatch({ type: 'FETCH_GIPHS'})
    }

    return (
        <div></div>
    )
}

export default GiphyList;