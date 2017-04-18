import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMovie } from '../actions';
import { browserHistory } from 'react-router';

class MoviesNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };
  }
  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addMovie(this.state);
    browserHistory.push('/shows');
  }
  handleOnTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }
  handleOnDescriptionChange(event) {
    this.setState({
      description: event.target.value
    });
  }
  render() {
    return (
      <div>
        <h2>Add a Movie</h2>
        <form onSubmit={(event) => this.handleOnSubmit(event)} >
          <input
            type="text"
            placeholder="Title"
            onChange={(event) => this.handleOnTitleChange(event)} />
          <input
            type="text"
            placeholder="Description"
            onChange={(event) => this.handleOnDescriptionChange(event)} />
          <input
            type="submit"
            value="Add Movie" />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMovie: bindActionCreators(addMovie, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(MoviesNew);