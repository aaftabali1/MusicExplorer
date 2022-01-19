import { connect } from "react-redux";
import Player from "./player";
import { mapStateToProps } from "./store";

export default connect(mapStateToProps,null)(Player);