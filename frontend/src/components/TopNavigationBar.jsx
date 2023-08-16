import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className='nav-topic'>
      <TopicList topics ={props.topics}/>
      </div>
      <div className='nav-badge'>
      <FavBadge count={props.count} />
      </div>
    </div>
  )
}

export default TopNavigationBar;