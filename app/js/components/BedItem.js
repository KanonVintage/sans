import React from 'react';

const BedItem = (props) => {
	return (
        <div className="bed-item gif-item block">
            <div className="left-block">
                <i className="fa fa-bed" aria-hidden="true">
                    &nbsp;
                </i>
                <span>{props.bed.bedNumber}</span>
            </div>
            <ul className="right-block">
                <li>
                    <a href="javascript:void(0);" title="edit">
                        <i className="fa fa-pencil" aria-hidden="true" />
                    </a>
                </li>
                <li>
                    <a href="javascript:void(0);" title="delete">
                        <i className="fa fa-trash" aria-hidden="true" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default BedItem;

/*return (
        <div className="bed-item">
        	<span id="loadBeds" onClick={() => console.log(props.bed)}>{props.bed.bedNumber}</span>
        </div>
    )*/