import { combineReducers } from 'redux';
import BedsReducer from './beds';
import PatientsReducer from './patients';
import GifsReducer from './gifs';
import ModalReducer from './modal';
import PacmanReducer from './pacman';

const rootReducer = combineReducers({
	beds: BedsReducer,
	patients: PatientsReducer,
    gifs: GifsReducer,
    modal: ModalReducer,
    pacman: PacmanReducer
});

export default rootReducer;
