import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({count, setCount}) {
  const [like, setLiked] = useState(false);

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
      <button onClick={() => {
        // console.log('clicked')
        setCount(count + 1)
        return setLiked(true)}}>
          <FavIcon selected={like} /> {/* Pass the selected prop */}
        </button>
      </div>
    </div>
  );
}

export default PhotoFavButton;
