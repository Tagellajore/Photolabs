import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import {} from "mocks/topics";



const Photo = (props) => {
  
  /* Insert React */
  return (
    <ol className="photo-item">
      <PhotoFavButton 
      count={props.count} 
      favouriteList={props.favouriteList}
      toggleFavourite={props.toggleFavourite}
      id={props.id}
      />
      <img
        src={props.img}
        alt=""
        className="photo-image"
        />
        {/** onClick={() => props.imageClick(props.img)}*/}
      <div className="photo-list__user-details">
        <img src={props.profile} alt="" className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <div>{props.username}</div>
          <div className="photo-list__user-location">
            {props.city}, {props.country}
          </div>
        </div>
      </div>
    </ol>
  );
};

export default Photo;


