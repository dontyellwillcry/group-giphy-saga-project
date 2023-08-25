import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function GiphyList() {

  console.log("in GiphyList TADA");

  const dispatch = useDispatch();
  const giphySearchList = useSelector((store) => store.giphySearchList);

  //let testGiph = giphySearchList.data

//   console.log("gSL",giphySearchList.data[0].images.original.url)
  //   useEffect(() => {
  //       getGiphs()
  //   }, [])

  // There was actaully nothing wrong with our console logs
  // the problem was WHERE we were console logging.
  // Any console log needed to happend below the dispatch.

  const getGiphs = () => {
    console.log('in getGiphs"');
    dispatch({ type: "FETCH_GIPHS" });
  };

function addFavorite(gif) {
    dispatch({
    type: "ADD_FAVORITE",
    payload: gif.id,
});
}
//   console.log("gSL",giphySearchList.data)

  return (
    
    <>
      <div>
        <input id="searchForm" type="text" placeholder="search"></input>
        <button className="searchButton" onClick={getGiphs}>
          SEARCH
        </button>
      </div>
      <div>
        {giphySearchList.data ? (
          <ul>
            {/* We have to map over .data because even though giphySearchList is an array, 
            .data is a nested array */}
            {giphySearchList.data.map((gif) => (
              <li key={gif.id}>
                <img src={gif.images.original.url} alt={gif.title} />
                <button onClick={() => addFavorite(gif)}>FAVORITE</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No GIFs to display</p>
        )}
      </div>
    </>
  );
      console.log("gSL",giphySearchList.data)

}

export default GiphyList;
