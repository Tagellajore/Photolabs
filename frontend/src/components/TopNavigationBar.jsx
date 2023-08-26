import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

// component for the top navigation on the home page
const TopNavigationBar = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="nav-topic">
        <TopicList
          topics={props.topics}
          topicClicked={props.topicClicked}
          photoByTopic={props.photoByTopic}
        />
      </div>
      <div className="nav-badge">
        <FavBadge count={props.favouriteList?.length} />
      </div>
    </div>
  );
};

export default TopNavigationBar;
