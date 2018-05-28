import React from 'react';
import Modal from 'react-modal';

const PacModal = (props) => {
    if (!props.sourceId || !props.targetId) {
        return <div></div>;
    }else{
        let patient = props.sourceId.patient.display
        patient = props.sourceId.patient.display.split("-")[1]
        return (
            <Modal
                isOpen={ props.pacmanIsOpen }
                contentLabel={"valor"}
                onRequestSetPacman={()=>this.props.actions.setPacman(props.sourceId.patient.uuid, props.targetId.bedUuid)}
                onRequestClose={()=>props.onRequestClose()}>

                <div className="gif-modal">
                    <p>Seguro que desea asignar al paciente</p>
                    <p><strong>{patient}</strong></p>
                    <p>en la cama <strong>{props.targetId.bedNumber}</strong></p>

                    <button type="button" className="btn btn-success" 
                        onClick={() => props.onRequestSetPacman(props.sourceId.patient.uuid,props.targetId.bedUuid)}>acceptar</button>
                    <i className="fa fa-bed" aria-hidden="true">
                        &nbsp;
                    </i>
                    <button type="button" className="btn btn-danger"
                        onClick={() => props.onRequestClose()}>cancelar</button>
                </div>
            </Modal>
        );
    }
};

export default PacModal;
