import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import reducer action from '../actions'
import { Link } from 'react-router';

class ShowsPage extends Component {

  render() {
    return (
      <div>
        <div className='col-md-4'>
          <ul>
            {this.props.shows.map(show =>
              <li key={show.id}>
                <Link to={`/shows/${show.id}`}>{ show.name }</Link>
              </li>
            )}
          </ul>
          <Link to="/shows/new">Add a Show</Link>
        </div>
        {this.props.children}
      </div>
    );
  }

};

const mapStateToProps = (state) => {
  return {
    shows: state.shows
  };
}

export default connect(mapStateToProps, null)(ShowsPage);
