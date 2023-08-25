import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import Photo from 'components/Photo';
// import PhotoListItem from 'components/PhotoListItem';
import PhotoList from 'components/PhotoList';
// import photos from 'mocks/photos';
// import PhotoFavButton from 'components/PhotoFavButton';



const PhotoDetailsModal = (props) => {

  console.log("_________________++++++++++++++++++ from photdetailsmodal______________", props)
  // console.log(props);
  // console.log(props.imgs.similar_photos.photo2)
 
  const photolist = Object.values(props.imgs.similar_photos)
  console.log(photolist);

  return (
    <div className="photo-details-modal">
      <button
        onClick={props.closeModal}
        className="photo-details-modal__close-button"
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className='photo-details-modal__image'>
        <Photo 
        id={props.imgs.id}
        img={props.imgs.urls.regular} 
        profile={props.imgs.user.profile}
        username={props.imgs.user.name}
        city={props.imgs.location.country}
        country={props.imgs.location.country}
        favouriteList={props.favouriteList}
        toggleFavourite={props.toggleFavourite}
        />
        </div>

        {/* <PhotoListItem
          img={props.imgs.urls.regular}
          profile={props.imgs.user.profile}
          username={props.imgs.user.name}
          city={props.imgs.location.country}
          country={props.imgs.location.country}
        ></PhotoListItem> */}

      <div className="related-photo-topic">
        <h3>Related Photos</h3>
      </div>
      <PhotoList 
      photos={photolist} 
      favouriteList={props.favouriteList}
      toggleFavourite={props.toggleFavourite}
      />

      {/* <Photo img={props.img.similar_photos.photo2.urls.regular} />
      <Photo img={props.img.similar_photos.photo3.urls.regular} />
      <Photo img={props.img.similar_photos.photo4.urls.regular} />
      <Photo img={props.img.similar_photos.photo5.urls.regular} /> */}
    </div>
  );
};

export default PhotoDetailsModal;
