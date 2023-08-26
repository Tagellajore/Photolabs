import React, { useState } from "react";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";


const HomeRoute = (props) => {
  
  // console.log(props);
  // const [count, setCount] = useState(0);
  // {topics, photos, imageClick}
  

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={props.topics}
        count={props.count}
        favouriteList={props.favouriteList}
        topicClicked={props.topicClicked}
        photoByTopic={props.photoByTopic}
      />
      <PhotoList
        count={props.count}
        photos={props.photos}
        imageClick={props.imageClick}
        favouriteList={props.favouriteList}
        toggleFavourite={props.toggleFavourite}
      />
    </div>
  );
}

export default HomeRoute;