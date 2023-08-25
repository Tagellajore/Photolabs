import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';
// import useApplicationData from './hooks/useApplicationData';

const TopNavigationBar = (props) => {

  // const {  state,  favouriteList } = useApplicationData();

  // console.log('props from top nav', props, favouriteList)
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className='nav-topic'>
      <TopicList topics ={props.topics}/>
      </div>
      <div className='nav-badge'>
        {/* xxxx {props.favouriteList?.length} */}
      <FavBadge count={props.favouriteList?.length} />
      </div>
    </div>
  )
}

export default TopNavigationBar;