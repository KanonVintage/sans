import React from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../utilities/itemTypes'

class BedItem extends React.Component{
	render(){
		let props = this.props;
		if(this.props.bed.patient==null){
			return props.connectDropTarget(
		        <div className="bed-item gif-item block bg-success">
		            <div className="left-block">
		                <i className="fa fa-bed" aria-hidden="true">
		                    &nbsp;
		                </i>
		                <pre className="text-center">{props.bed.bedNumber}</pre>
		            </div>
		            <div className="bb-work bb-work-placeholder" />
		            <ul className="right-block">
		                <li>
		                    <span>Disponible</span>
		                </li>
		                <li>
		                    <span>{props.bed.location}</span>
		                </li>
		            </ul>
		        </div>
		    )
		}else{
			return props.connectDropTarget(
		        <div className="bed-item gif-item block bg-danger">
		            <div className="left-block">
		            	<i className="fa fa-bed" aria-hidden="true">
		                    &nbsp;
		                </i>
		                <div>
				            <pre className="text-center">{props.bed.bedNumber}
				            <p className="glyphicon glyphicon-remove col-sm-2"
				               onClick={() => props.unAssign(props.bed)}></p>
				            </pre>
				        </div>
		            </div>
		            <div className="bb-work bb-work-placeholder row" />
		            <ul className="right-block">
		                <li>
		                    <span>
		                    	{props.bed.patient.person.preferredName.givenName} {props.bed.patient.person.preferredName.familyName}
		                    </span>
		                </li>
		                <li>
		                    <span>Edad: {props.bed.patient.person.age}</span>
		                </li>
		            </ul>
		        </div>
		    )
		};
	}
};

const patientDragTarget = {
  drop(targetProps, monitor) {
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
/*changed hover to drop line 55*/
/*return (
        <div className="bed-item">
        	<span id="loadBeds" onClick={() => console.log(props.bed)}>{props.bed.bedNumber}</span>
        </div>
    )*/

/*const BedItem = (props) => {*/