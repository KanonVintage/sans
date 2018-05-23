import { combineReducers } from 'redux';
import BedsReducer from './beds';
import PatientsReducer from './patients';
import GifsReducer from './gifs';
import ModalReducer from './modal';

const rootReducer = combineReducers({
	beds: BedsReducer,
	patients: PatientsReducer,
    gifs: GifsReducer,
    modal: ModalReducer
});

export default rootReducer;
