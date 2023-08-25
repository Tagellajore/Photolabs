import { useReducer } from "react";

/* insert app levels actions below */
export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  SET_MODAL_FALSE: 'SET_MODAL_FALSE'
}

const initialState = {
  count: 0,
  modal: false,
  imgs: {},
  favouriteList: []
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      // console.log('console for add',state, action);
      console.log('console for state',state);
      return { 
        ...state,
        favouriteList: [...state.favouriteList, action.payload],
        count: state.count + 1      // prev => prev + 1
       }; 

    case ACTIONS.FAV_PHOTO_REMOVED:
      console.log('console for remove',state);
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
    case ACTIONS.SET_PHOTO_DATA:
      // console.log(action.payload);
      return {
        ...state,
        imgs: action.payload,
        modal: !state.modal
      }
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}


const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // const [count, setCount] = useState(0);
  // const [modal, setModal] = useState(false);
  // const [imgs, setImg] = useState({});
  // const [favouriteList, setFavouriteList] = useState([]);


  const setPhotoSelected = (images) => {
      // setModal(!modal)
      // setImg(images)
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: images })
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

  console.log('console state line 85',state)
  return {
    state,
    count: state.count,
    modal: state.modal,
    imgs: state.imgs,
    favouriteList: state.favouriteList,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    toggleFavourite
  }; 
  
};

export default useApplicationData;