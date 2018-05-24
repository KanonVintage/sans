import { OPEN_PACMAN, CLOSE_MODAL } from '../actions';

const initialState =  {
    sourceId: null,
    targetId: null,
    pacmanIsOpen: false
};

export default function modal(state = initialState, action) {
    switch(action.type) {
        case OPEN_PACMAN:
            //console.log(action)
            return Object.assign({},state,{
                pacmanIsOpen: true,
                sourceId: action.payload.sourceId,
                targetId: action.payload.targetId
            })
        case CLOSE_MODAL:
            return Object.assign({},state,{
                pacmanIsOpen: false,
                sourceId: null,
                targetId: null,
            })
        default:
            return state;
    }
}

//selectedGif: action.payload.selectedGif