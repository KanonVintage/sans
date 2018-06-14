import { FETCH_INIT_DATA } from '../actions';

const initialState =  {
    patients: [],
    beds: []
};

export default function init(state = initialState, action) {
    switch (action.type) {
        case FETCH_INIT_DATA:
        	//console.log(action.payload);
            return Object.assign({},state,{
                patients: action.payload.patients.results,
                beds: action.payload.beds.bedLayouts
            })
        default:
            return state;
    }
}
