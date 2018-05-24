import React from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../utilities/itemTypes'

class BedItem extends React.Component{
	render(){
		let props = this.props;
		return props.connectDropTarget(
	        <div className="bed-item gif-item block">
	            <div className="left-block">
	                <i className="fa fa-bed" aria-hidden="true">
	                    &nbsp;
	                </i>
	                <span>{props.bed.bedNumber}</span>
	            </div>
	            <div className="bb-work bb-work-placeholder" />
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
	}
};

const patientDragTarget = {
  hover(targetProps, monitor) {
  	const targetId = targetProps.bed;
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;
    targetProps.onMove({sourceId, targetId});
  }
}

export default DropTarget(ItemTypes.PACMAN, patientDragTarget, function(connect) {
  return {
	    connectDropTarget: connect.dropTarget(),
	  };
	})(BedItem);
/*return (
        <div className="bed-item">
        	<span id="loadBeds" onClick={() => console.log(props.bed)}>{props.bed.bedNumber}</span>
        </div>
    )*/

/*const BedItem = (props) => {*/