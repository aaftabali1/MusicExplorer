import { connect } from "react-redux";
import ListSongs from "./listSongs";
import { mapDispatchToProps, mapStateToProps } from "./store";

export default connect(mapStateToProps,mapDispatchToProps)(ListSongs);