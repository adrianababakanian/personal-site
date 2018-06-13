import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navigator.css';

class Navigator extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const { history } = this.props;
    history.push(this.state.value);
    event.preventDefault();
  }

  // On submitting a new command, add to rendered stack
  // of previously-executed commands.
  handleEnter(event) {
    const { history } = this.props;
    if (event.key == 'Enter') {
      event.preventDefault();
      history.push(this.state.value);
    }
  }

  // Clear the stack of previously-executed commands
  // displayed in the navigator.
  clearCommands() {

  }

  render() {
    return (
      <div className="navigator">
        <input onKeyPress={this.handleEnter} onChange={this.handleChange} />
      </div>
    )
  }
}

export default withRouter(Navigator);
