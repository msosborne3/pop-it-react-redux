import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import reducer action from '../actions'
import { Link } from 'react-router';

class MoviesPage extends Component {

  render() {
    return (
      <div>
        <div className='col-md-4'>
          <ul>
            {this.props.movies.map(movie =>
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>{ movie.name }</Link>
              </li>
            )}
          </ul>
          <Link to="/movies/new">Add a Movie</Link>
        </div>
        {this.props.children}
      </div>
    );
  }

};

const mapStateToProps = (state) => {
  return {
    movies: state.movies
  };
}

export default connect(mapStateToProps, null)(MoviesPage);
