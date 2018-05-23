import { FETCH_ACTIVE_VISITS } from '../actions';

const initialState =  {
    data: []
};

export default function patients(state = initialState, action) {
    switch (action.type) {
        case FETCH_ACTIVE_VISITS:
        	//console.log(action.payload.results);
            return Object.assign({},state,{
                data: action.payload.results
            })
        default:
            return state;
    }
}
