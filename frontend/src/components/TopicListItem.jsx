import React from "react";

import "../styles/TopicListItem.scss";

// component for displaying the topic in top navigation bar
const TopicListItem = (props) => {
  console.log("props from topiclistitem", props);
  return (
    <div className="topic-list__item">
      <span onClick={() => props.topicClicked(props.topicId)}>
        {props.topic}
      </span>
    </div>
  );
};

export default TopicListItem;
