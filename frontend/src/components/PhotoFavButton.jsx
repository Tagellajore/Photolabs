import React, { useCallback, useState } from 'react';
// import useApplicationData from './hooks/useApplicationData';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  // const { addToFavourite, removeFromFavourite } = useApplicationData();
  // console.log('+++++++7', props)
  // console.log(props);
  // const {count, setCount} = props;
  // const [like, setLiked] = useState(false);

  // const toggleLike = () => {
  //   // alert(props.id)
  //   // let favouriteListCopy = [...props.favouriteList];
  //   if (like) {
  //     // const index = favouriteListCopy.indexOf(props.id);
  //     // favouriteListCopy.splice(index, 1);
  //     removeFromFavourite(props.id);
  //     setLiked(false);
  //     console.log('--------remove fav--------------')
  //   } else {
  //     addToFavourite(props.id);
  //     setLiked(true);
  //   }

  //   // props.setFavouriteList(favouriteListCopy);
  // }

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
      {/* __ {props.favouriteList.length} */}
      <button onClick={() => props.toggleFavourite(props.id)}>
          <FavIcon selected={props.favouriteList.includes(props.id)} /> {/* Pass the selected prop */}
        </button>
      </div>
    </div>
  );
}

export default PhotoFavButton;

// setCount(count + 1)
// return setLiked(true)
