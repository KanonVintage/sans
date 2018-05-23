import React from 'react';

const BedItem = (props) => {
    return (
        <div className="bed-item">
        	<span id="loadBeds" onClick={() => console.log(props.bed)}>{props.bed.bedNumber}</span>
        </div>
    )
};

export default BedItem;