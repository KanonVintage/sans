import React from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../utilities/itemTypes'

class Return extends React.Component{
	render(){
		let props = this.props;
		return props.connectDropTarget(
			<div className="bed-list gif-list">
		        <div className="bed-item gif-item block bg-warning">
		        	<div className="bb-work bb-work-placeholder" />
		        	<div className="left-block well">
		                <i className="fa fa-bed" aria-hidden="true">
		                    &nbsp;
		                </i>
		                <pre className="text-center">Dar el alta</pre>
		            </div>
		        </div>
		    </div>
	    )
	}
};

const patientDragTarget = {
  drop(targetProps, monitor) {
  	const targetId = {}
  	targetId.bedId=null
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;
    //if (sourceProps.id.bedId==null){
    	targetProps.onMove({sourceId, targetId});
    //}
  }
}

export default DropTarget(ItemTypes.PACMAN, patientDragTarget, function(connect) {
  return {
	    connectDropTarget: connect.dropTarget(),
	  };
	})(Return);