import { bindActionCreators } from "redux";

/* Getting album reducer and returning it as state */
export const mapStateToProps = state => {
  const {albumReducer} = state;
  return albumReducer;
};

