import { createStore, combineReducers } from 'redux';
import placesReducer from './reducer/places';

const rootReducer = combineReducers({
    places: placesReducer
});

const configureStore = () => {
  return createStore(rootReducer);  
};

export default configureStore;