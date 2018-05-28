import React from 'react';
import Moment from "moment";
import { DragSource } from 'react-dnd';
import ItemTypes from '../utilities/itemTypes'

class PatientItem extends React.Component{
	render(){
		let props = this.props
		let patient = props.patient.patient.display
	    let date = new Date(props.patient.startDatetime)
	    date = Moment(date)
	    date.locale("es")
	    {/*se puede agregar :ss*/}
	    date = date.format("dddd, MMMM Do YYYY, h:mm a")
	    try {
	      patient = props.patient.patient.display.split("-")[1]
	    } catch (e) {
	      console.error("Cannot change the display from patient. ", patient)
	    }
	    return props.connectDragSource(
	    	<div className="gif-item">
		    	<table className="table table-hover table-bordered ">
			    	<tbody>
				    	<tr>
				          	<td className="info">
				            	{ patient }
				          	</td>
				        </tr>
				        <tr>
				          	<td className="info">
				            	{ date }
				          	</td>
				        </tr>
			        </tbody>
		        </table>
	        </div>
	    )
	}
};

const patientDragSource = {
  beginDrag(props) {
  	//console.log(props.patient)
    return {id:props.patient};
  }
}

export default DragSource(ItemTypes.PACMAN, patientDragSource, function(connect) {
    return {
      connectDragSource: connect.dragSource(),
    };
  })(PatientItem);
/*<div className="patient-item">
	<span id="loadBeds" onClick={() => console.log(props.patient)}>{props.patient.patient.display}</span>
</div>

<tr>
  	<td className="info">
    	{ props.patient.location.display }
  	</td>
</tr>
<tr>
  	<td className="info">
    	{ props.patient.visitType.display }
  	</td>
</tr>*/