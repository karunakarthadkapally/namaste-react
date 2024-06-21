import RestaurentCard from "./RestaurentCard"; // importing the default export
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const arr = useState(resList);

  //const [listOfRestaurents, setListOfRestaurents] = arr;

  const listOfRestaurents = arr[0];
  const setListOfRestaurents = arr[1];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurents.filter(
              (restaurent) => restaurent.info.avgRating > 4
            );

            setListOfRestaurents(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurents.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
