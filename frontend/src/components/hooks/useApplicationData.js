import { useEffect, useReducer } from "react";

/* insert app levels actions below */
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SET_MODAL_FALSE: 'SET_MODAL_FALSE',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
}

const initialState = {
  count: 0,
  modal: false,
  imgs: {},
  favouriteList: [],
  photoData: [],
  topicData: [],
  photoByTopic: []
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      // console.log('console for add',state, action);
      // console.log('console for state',state);
      return { 
        ...state,
        favouriteList: [...state.favouriteList, action.payload],
        count: state.count + 1      // prev => prev + 1
       }; 

    case ACTIONS.FAV_PHOTO_REMOVED:
      // console.log('console for remove',state);
      return {
        ...state,
        favouriteList: state.favouriteList.filter(photoId => Number(photoId) !== Number(action.payload)),
        count: state.count - 1
      };
    case ACTIONS.SET_MODAL_FALSE:
      return { 
        ...state, 
        modal: false
      }
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      // console.log(action.payload);
      return {
        ...state,
        imgs: action.payload,
        modal: !state.modal
      }
    case ACTIONS.SET_PHOTO_DATA:
      // console.log(action.payload);
      return {
        ...state,
        photoData: action.payload,
      }
    case ACTIONS.SET_TOPIC_DATA:
      // console.log(action.payload);
      return {
        ...state,
        topicData: action.payload
      }
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      // console.log(action.payload);
      return {
        ...state,
        photoByTopic: action.payload
      }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}


const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const topicClicked = (ID) => {
    let topic
    topic = `http://localhost:8001/api/topics/photos/${ID}`;

    fetch(topic)
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
  };

  // const [count, setCount] = useState(0);
  // const [modal, setModal] = useState(false);
  // const [imgs, setImg] = useState({});
  // const [favouriteList, setFavouriteList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/api/photos')
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }))
  }, [])
  useEffect(() => {
    fetch('http://localhost:8001/api/topics')
      .then((response) => response.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }))
  }, [])

  // const TOPIC_ID = 1

  // useEffect(() => {
  //   fetch(`http://localhost:8001/api/topics/photos/1}`)
  //     .then((response) => response.json())
  //     .then((data) =>
  //       dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data })
  //     );
  // }, []);



  const setPhotoSelected = (images) => {
      // setModal(!modal)
      // setImg(images)
      dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: images })
  }

  const onClosePhotoDetailsModal = () => {
      // setModal(false)
      dispatch({ type:ACTIONS.SET_MODAL_FALSE });
  }

  // const addToFavourite = (id) => {
  //   dispatch( {type: ACTIONS.FAV_PHOTO_ADDED, payload: id })
  // }

  // const removeFromFavourite = (id) => {
  //   dispatch( {type: ACTIONS.FAV_PHOTO_REMOVED, payload: id })
  // }

  const toggleFavourite = (id) => {
    if (state.favouriteList.includes(id)) {
      return dispatch( {type: ACTIONS.FAV_PHOTO_REMOVED, payload: id })
    } 
    return dispatch( {type: ACTIONS.FAV_PHOTO_ADDED, payload: id })
  }
  
  // const topicClicked = (ID) => {
  //   console.log('++++++++++++++++++++++++++++++++')
  //   console.log(topic)
  //   topic = `http://localhost:8001/api/topics/photos/${ID}`
  //   console.log('++++++++++++++++++++++++++++++++')
  //   console.log(topic)
  // };

  // console.log('console state line 85',state)
  return {
    state,
    count: state.count,
    modal: state.modal,
    imgs: state.imgs,
    favouriteList: state.favouriteList,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    toggleFavourite,
    photoData: state.photoData,
    topicData: state.topicData,
    topicClicked,
    photoByTopic: state.photoByTopic
  }; 
  
};

export default useApplicationData;