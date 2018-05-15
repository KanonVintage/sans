import Beds from "../components/Beds"
import { withRouter } from 'react-router'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
// actions
import * as bedActions from "../actions/Beds"

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, bedActions), dispatch)
}

const mapStateToProps = state => Object.assign({}, state, {
  beds: state.beds,
})

export default connect(mapStateToProps, mapDispatchToProps)(Beds)
