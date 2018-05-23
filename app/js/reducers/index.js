import { combineReducers } from 'redux';
import BedsReducer from './beds';
import GifsReducer from './gifs';
import ModalReducer from './modal';

const rootReducer = combineReducers({
	beds: BedsReducer,
    gifs: GifsReducer,
    modal: ModalReducer
});

export default rootReducer;
