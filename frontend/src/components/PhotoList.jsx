import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";


const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((element) => {
        return (
          <PhotoListItem
          count={props.count}
          setCount={props.setCount}
          key = {element.id}
          img = {element.urls.regular}
          profile = {element.user.profile}
          city = {element.location.city}
          country = {element.location.country}
          username = {element.user.name}
          imageClick = {props.imageClick}
          />
        );
      })}
    </ul>
  );
};

export default PhotoList;
