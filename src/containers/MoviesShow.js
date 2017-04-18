import React from 'react';
import { connect } from 'react-redux';

const MoviesShow = (props) => {
  const movie = props.movie;

  return (
    <div className="col-md-8">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const movie = state.movies.find( (movie) => movie.id == ownProps.routeParams.id )
  if (movie) {
    return {
      movie: movie
    }
  } else {
    return {
      movie: {}
    };
  }
};

export default connect(mapStateToProps)(MoviesShow);
