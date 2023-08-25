import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  return (
    <div className="topic-list__item">
      {/* Insert React */}
      <button>
        {console.log('click')}
      {props.topic}
      </button>
    </div>
  );
};

export default TopicListItem;
