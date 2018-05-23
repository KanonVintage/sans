import React from 'react';
import BedItem from './BedItem';

const BedList = (props) => {
    const bedItems = props.beds.map((bed) => {
        return <BedItem key={bed.bedId} bed={bed} />
    });

    return (
        <div className="bed-list">{bedItems}</div>
    );
};

export default BedList;
