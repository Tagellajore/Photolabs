import React from "react";

import useApplicationData from "components/hooks/useApplicationData";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
// import photos from "mocks/photos";
// import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
// import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  
  const { 
    count, 
    modal, 
    imgs, 
    setPhotoSelected, 
    onClosePhotoDetailsModal,
    favouriteList, 
    toggleFavourite,
    photoData,
    topicData,
    topicClicked,
    photoByTopic
  } = useApplicationData();
 
  // console.log('console from app', favouriteList);

  return (
    
    <div className="App">
      {/* <TopNavigationBar/> */}
      {/* <TopicList/> */}
      {/* <PhotoList /> */}
      {/* <PhotoDetailsModal/> */}
      <HomeRoute
        count={count}
        photos={photoData}
        topics={topicData}
        imageClick={setPhotoSelected}
        favouriteList={favouriteList}
        toggleFavourite={toggleFavourite}
        topicClicked={topicClicked}
        photoByTopic={photoByTopic}
      />
      {modal && (
        <PhotoDetailsModal 
        imgs={imgs} 
        closeModal={onClosePhotoDetailsModal}
        favouriteList={favouriteList}
        toggleFavourite={toggleFavourite}
        />
      )}
    </div>
  );
};

export default App;
