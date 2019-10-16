import {ADD_PLACE, SELECT_PLACE, DELETE_PLACE, UNSELECT_PLACE} from '../actions/actionTypes'

const initialState = {
    places: [],
    selectedPlace: null
};
const reducer =(state = initialState, action) => {
    switch(action.type){
        case ADD_PLACE:
            return{
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName,
                    image: {
                      uri:
                        "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
                    }
                  })
            };
        case DELETE_PLACE:
            return{
             ...state,
                places: prevState.places.filter(place => {
                 return place.key !== state.selectedPlace.key;
                }),
                selectedPlace: null
                };
         case SELECT_PLACE:
             return{
                ...state,
                selectedPlace: state.places.find(place => {
                    return place.key === action.placeKey;
                })
             };       
        case UNSELECT_PLACE:
            return{
                ...state,
                selectedPlace: null
            };
        default:
            return state;
    }
};

export default reducer;