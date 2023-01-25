import {createStore} from 'redux';

// const [profile, setProfile] = useState("Eryanto");

// setProfile("Agusriadi")

const initialState = {
  loading: false,
  name: 'Eryanto Agusriadi',
  address: 'Pekanbaru',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }
  if (action.type === 'SET_NAME') {
    return {
      ...state,
      name: 'Yahh',
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;
