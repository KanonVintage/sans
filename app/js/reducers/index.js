import { combineReducers } from 'redux';
//import BedsReducer from './beds';
//import PatientsReducer from './patients';
import GifsReducer from './gifs';
import ModalReducer from './modal';
import PacmanReducer from './pacman';
import InitReducer from './init';

const rootReducer = combineReducers({
	init: InitReducer,
	//beds: BedsReducer,
	//patients: PatientsReducer,
    gifs: GifsReducer,
    modal: ModalReducer,
    pacman: PacmanReducer
});

export default rootReducer;

/*beds and patients functions wont be avaiable for now*/