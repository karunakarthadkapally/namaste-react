import { CDN_URL } from "../utils/constants"; // importing the named export

const RestaurentCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    costForTwo,
    cuisines,
    locality,
    areaName,
  } = resData?.info;

  const { slaString } = resData?.info?.sla;

  return (
    <div className="res-card" style={{ background: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{slaString}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{locality}</h4>
    </div>
  );
};

export default RestaurentCard;
