import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'components/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
// import PhotoDetailsModal from 'routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [modal, setModal] = useState(false);

  const imageClick = () => {
      setModal(!modal)
  }

  return (
    <div className="App">
    {/* <TopNavigationBar/> */}
    {/* <TopicList/> */}
    {/* <PhotoList /> */}
    {/* <PhotoDetailsModal/> */}
    <HomeRoute photos={photos} topics={topics} imageClick={imageClick}/>
    {modal && <PhotoDetailsModal/>}
    </div>
  );
};

export default App;
