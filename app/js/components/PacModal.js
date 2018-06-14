import React from 'react';
import Modal from 'react-modal';

const PacModal = (props) => {
    if (!props.sourceId || !props.targetId) {
        return <div></div>;
    }else{
        let patient = props.sourceId.patient.display
        patient = props.sourceId.patient.display.split("-")[1]
        //console.log(props.sourceId)
        if(props.targetId.bedId==null){
            return (
                <Modal
                    isOpen={ props.pacmanIsOpen }
                    contentLabel={"valor"}
                    onRequestClose={()=>props.onRequestClose()}>

                    <div className="gif-modal">
                        <p className="glyphicon glyphicon-remove-sign">&nbsp;Advertencia:</p>
                        <p>Esta por darle de alta al paciente</p>
                        <p><strong>{patient}</strong></p>
                        <button type="button" className="btn btn-success" 
                            onClick={() => props.onRequestDelVisit(props.sourceId)}>aceptar</button>
                        <i className="fa fa-bed" aria-hidden="true">
                            &nbsp;
                        </i>
                        <button type="button" className="btn btn-danger"
                            onClick={() => props.onRequestClose()}>cancelar</button>
                    </div>
                </Modal>
            );
        }
        if(props.sourceId.encounters.length==0){
            return (
                <Modal
                    isOpen={ props.pacmanIsOpen }
                    contentLabel={"valor"}
                    onRequestClose={()=>props.onRequestClose()}>

                    <div className="gif-modal">
                        <p className="glyphicon glyphicon-remove-sign">&nbsp;Error:</p>
                        <p>Al paciente <strong>{patient}</strong></p>
                        <p>no se le han revisado sus signos vitales</p>
                        
                        <button type="button" className="btn btn-danger"
                            onClick={() => props.onRequestClose()}>cancelar</button>
                    </div>
                </Modal>
            );
        }
        if(props.sourceId.bedId==null){
            return (
                <Modal
                    isOpen={ props.pacmanIsOpen }
                    contentLabel={"valor"}
                    onRequestSetPacman={()=>this.props.actions.setPacman(props.sourceId.patient.uuid, props.targetId.bedUuid)}
                    onRequestClose={()=>props.onRequestClose()}>

                    <div className="gif-modal">
                        <p className="glyphicon glyphicon-plus-sign">&nbsp;Mensaje:</p>
                        <p>Seguro que desea asignar al paciente</p>
                        <p><strong>{patient}</strong></p>
                        <p>en la cama <strong>{props.targetId.bedNumber}</strong>?</p>

                        <button type="button" className="btn btn-success" 
                            onClick={() => props.onRequestSetPacman(props.sourceId.patient.uuid,props.targetId.bedUuid)}>aceptar</button>
                        <i className="fa fa-bed" aria-hidden="true">
                            &nbsp;
                        </i>
                        <button type="button" className="btn btn-danger"
                            onClick={() => props.onRequestClose()}>cancelar</button>
                    </div>
                </Modal>
            );
        }else{
            return (
                <Modal
                    isOpen={ props.pacmanIsOpen }
                    contentLabel={"valor"}
                    onRequestSetPacman={()=>this.props.actions.setPacman(props.sourceId.patient.uuid, props.targetId.bedUuid)}
                    onRequestClose={()=>props.onRequestClose()}>

                    <div className="gif-modal">
                        <p className="glyphicon glyphicon-alert">&nbsp;Advertencia:</p>
                        <p>El paciente<strong>{patient}</strong></p>
                        <p>Ya se encuentra en la cama <strong>{props.sourceId.bed}</strong></p>
                        <p>Desea moverlo a la cama <strong>{props.targetId.bedNumber}</strong>?</p>

                        <button type="button" className="btn btn-success" 
                            onClick={() => props.onRequestSetPacman(props.sourceId.patient.uuid,props.targetId.bedUuid)}>aceptar</button>
                        <i className="fa fa-bed" aria-hidden="true">
                            &nbsp;
                        </i>
                        <button type="button" className="btn btn-danger"
                            onClick={() => props.onRequestClose()}>cancelar</button>
                    </div>
                </Modal>
            );
        }
    }
};

export default PacModal;
