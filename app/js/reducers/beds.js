import { FETCH_EMERGENCY_BEDS } from '../actions';

const initialState =  {
    cama: []
};

export default function beds(state = initialState, action) {
    switch (action.type) {
        case FETCH_EMERGENCY_BEDS:
            return Object.assign({},state,{
                cama: action.payload.bedLayouts
            })
        default:
            return state;
    }
}
