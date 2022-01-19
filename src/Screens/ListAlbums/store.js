import { bindActionCreators } from "redux";
import {getAlbumData} from '../../Modules/Albums'

/* Getting album reducer and returning it as state */
export const mapStateToProps = (state) => {
  const { albumReducer } = state;
  return albumReducer;
};
export const mapDispatchToProps = (dispatch) =>
  bindActionCreators({getAlbumData}, dispatch);
