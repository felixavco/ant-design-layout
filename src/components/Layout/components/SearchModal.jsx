import React from "react";
import { connect } from "react-redux";
import { changeSeachModalState } from "../../../redux/actions/layout.actions";

const SearchModal = ({ changeSeachModalState, searchModalState }) => {


  return (
    <div>
      <h1>Sidebar</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  searchModalState: state.layout.searchModalState
});

export default connect(
  mapStateToProps,
  { changeSeachModalState }
)(SearchModal);
