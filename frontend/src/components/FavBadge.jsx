import React from 'react';
import FavIcon from './FavIcon';
// import {count, setCount} from './hooks/useCounter';
// import { useState } from "react";


import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, count }) => {
  const selected = true
  return (
    <div className='fav-badge'>
      {/* {count}  */}
      <FavIcon selected={selected}  displayAlert={!!isFavPhotoExist}/>
      <div className={count >= 1 ? "notification" : ""}></div>
    </div>
  ) 
};

export default FavBadge;