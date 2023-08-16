import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React */}
      {props.topics.map((element) => {
        return (
          <TopicListItem
          key = {element.id}
          topic = {element.title}
          />
        );
      })}
    </div>
  );
};

export default TopicList;
