import React from "react";
import australia from "../assets/australia.jfif";

function Content(props) {
  const {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
  } = props;
  return (
    <div className="content">
      <img src={imageUrl} className="content--img" />
      <div className="content--info">
        <div className="content--first">
          <i className="fa-solid fa-location-dot fa-xs content--icon"></i>
          <p className="content--country">{location}</p>
          <a href={googleMapsUrl} className="content--maps">
            View on google maps
          </a>
        </div>
        <h3 className="content--location">{title}</h3>
        <p className="content--date">
          {startDate} - {endDate}
        </p>
        <p className="content--description">{description}</p>
      </div>
    </div>
  );
}

export default Content;
