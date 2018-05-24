import React from 'react';
import Modal from 'react-modal';

const PacModal = (props) => {
    //console.log(props)
    if (!props.sourceId || !props.targetId) {
        return <div></div>;
    }

    return (
        <Modal
            isOpen={ props.pacmanIsOpen }
            contentLabel={"valor"}
            onRequestClose={ () => props.onRequestClose() }>
            <div className="gif-modal">
                <p><strong>Source:</strong> {props.sourceId.uuid}</p>
                <p><strong>Target:</strong> {props.targetId.bedUuid}</p>

                <button onClick={() => props.onRequestClose()}>close</button>
            </div>
        </Modal>
    );
};

export default PacModal;
