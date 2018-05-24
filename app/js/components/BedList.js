import React from 'react';
import BedItem from './BedItem';

const BedList = (props) => {
    const bedItems = props.beds.map((bed) => {
        return <BedItem key={bed.bedId} 
        				bed={bed} 
        				onMove={props.onMove}/>
    });

    return (
        <div className="bed-list gif-list bed-layout-row">{bedItems}</div>
    );
};

export default BedList;
