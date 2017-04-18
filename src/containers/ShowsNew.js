import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addShow } from '../actions';
import { browserHistory } from 'react-router';

class ShowsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };
  }
  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addShow(this.state);
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
        <h2>Add a Show</h2>
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
            value="Add Show" />
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addShow: bindActionCreators(addShow, dispatch)
  };
};

export default connect(null, mapDispatchToProps)(ShowsNew);
