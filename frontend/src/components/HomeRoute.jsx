import React, { useState } from "react";
import PhotoList from "./PhotoList";
import TopNavigationBar from "./TopNavigationBar";


const HomeRoute = ({topics, photos, imageClick}) => {
  const [count, setCount] = useState(0);
  

  return (
    <div className="home-route">
     <TopNavigationBar topics={topics} count={count} setCount={setCount}/>
     <PhotoList 
     count={count} 
     setCount={setCount} 
     photos={photos}
     imageClick={imageClick}
     />
    </div>
  );
}

export default HomeRoute;