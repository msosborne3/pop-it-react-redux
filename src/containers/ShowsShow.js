import React from 'react';
import { connect } from 'react-redux';

const ShowsShow = (props) => {
  const show = props.show;

  return (
    <div className="col-md-8">
      <h2>{show.title}</h2>
      <p>{show.description}</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const show = state.movies.find( (show) => show.id == ownProps.routeParams.id )
  if (show) {
    return {
      show: show
    }
  } else {
    return {
      show: {}
    };
  }
};

export default connect(mapStateToProps)(ShowsShow);
