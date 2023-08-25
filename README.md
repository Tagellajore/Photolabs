# react-photolabs
The PhotoLabs project for the Web Development React course programming.

# Photolabs

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```


```jsx
import useState from 'react'

const useApplicationData = () => {
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);
  const [imgs, setImg] = useState({});
  const [favouriteList, setFavouriteList] = useState([]);


  const setPhotoSelected = (images) => {
      setModal(!modal)
      setImg(images)
    
  }

  const onClosePhotoDetailsModal = () => {
      setModal(false)
    
  }

  return { count, setCount, modal, imgs, setPhotoSelected, onClosePhotoDetailsModal, favouriteList, setFavouriteList }; 
  
};

export default useApplicationData;

```
