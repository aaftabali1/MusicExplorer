import { connect } from "react-redux";
import ListAlbums from "./listAlbums";
import { mapDispatchToProps, mapStateToProps } from "./store";

export default connect(mapStateToProps,mapDispatchToProps)(ListAlbums);