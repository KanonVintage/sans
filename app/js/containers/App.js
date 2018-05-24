import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'redux';
import * as Actions from '../actions';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import BedList from '../components/BedList';
import PatientList from '../components/PatientList';
import GifList from '../components/GifList';
import GifModal from '../components/GifModal';
import SearchBar from '../components/SearchBar';
import PacModal from '../components/PacModal';

import '../styles/app.css';
import '../styles/bedlayout.css';

class App extends React.Component {
    componentDidMount(){
        this.props.actions.fetchEmergencyBeds()
        this.props.actions.fetchActiveVisits()
        console.info(this.props)
    }

    render() {
        return (
            <div>
                <SearchBar onTermChange={this.props.actions.requestGifs} />

                <PatientList patients={ this.props.patients }/>
                <BedList beds={ this.props.beds } onMove={
                    ({sourceId, targetId}) => this.props.actions.openPacman({sourceId, targetId}) } />
                <PacModal pacmanIsOpen={ this.props.pacmanIsOpen }
                          sourceId={ this.props.sourceId }
                          targetId={ this.props.targetId }
                          onRequestClose={ () => this.props.actions.closeModal() } />

                <GifList gifs={ this.props.gifs } onGifSelect={ 
                    (selectedGif) => this.props.actions.openModal({selectedGif}) } />
                <GifModal modalIsOpen={ this.props.modalIsOpen }
                          selectedGif={ this.props.selectedGif }
                          onRequestClose={ () => this.props.actions.closeModal() } />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        beds: state.beds.cama,
        patients: state.patients.data,
        gifs: state.gifs.data,
        modalIsOpen: state.modal.modalIsOpen,
        selectedGif: state.modal.selectedGif,
        pacmanIsOpen: state.pacman.pacmanIsOpen,
        sourceId: state.pacman.sourceId,
        targetId: state.pacman.targetId
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    };
}

export default compose(
    DragDropContext(HTML5Backend),
    connect(mapStateToProps, mapDispatchToProps)
)(App);