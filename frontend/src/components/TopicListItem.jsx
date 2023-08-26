import React from "react";

import "../styles/TopicListItem.scss";



const TopicListItem = (props) => {
  console.log('props from topiclistitem', props)
  return (
    <div className="topic-list__item">
      {/* Insert React */}
      <span onClick={() => props.topicClicked(props.topicId)}>
      {props.topic}
      </span>
    </div>
  );
};

export default TopicListItem;
