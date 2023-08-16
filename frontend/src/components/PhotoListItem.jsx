import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import {} from "mocks/topics";



const PhotoListItem = (props) => {
  /* Insert React */
  return(
    <ol className="photo-list__item">
      <PhotoFavButton count={props.count} setCount={props.setCount}/>
      <img src={props.img} alt="" className="photo-list__image"/>
      <div className="photo-list__user-details">
      <img src={props.profile} alt="" className="photo-list__user-profile"/>
      <div className="photo-list__user-info">
      <div>
      {props.username}
      </div>
      <div className="photo-list__user-location">
      {props.city}, {props.country}
      </div>
      </div>
      </div>
    </ol>
  );
};

export default PhotoListItem;


