import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import './Navigator.css';

class Navigator extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { show: false, value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  /* On submitting a new command, add to rendered stack
     of previously-executed commands. */
  handleSubmit(event) {
    const { history } = this.props;
    history.push(this.state.value);
    event.preventDefault();
  }

  /* On submitting a new command, add to rendered stack
     of previously-executed commands. */
  handleEnter(event) {
    const { history } = this.props;
    if (event.key === 'Enter') {
      event.preventDefault();
      let commands = (this.state.value).split(' ');
      if (commands[1] === '~') {
       history.push("/");
      }
      else if (commands[0] === 'cd') {
        history.push("/"+commands[1]);
      }
    }
  }

  handleClick() {
    this.setState({ show: !this.state.show, value: this.state.value });
  }

  /* Clear the stack of previously-executed commands
     displayed in the navigator. */
  clearCommands() {

  }

  render() {
    return (
      <div className='navigation'>
        <Fade left when={ this.state.show }>
          {/* <div className="navigator">
            <input onKeyPress={this.handleEnter} onChange={ this.handleChange } />
          </div> */}
          <input className='navigator' onKeyPress={this.handleEnter} onChange={ this.handleChange } />
        </Fade>
        <button className='toggle' type='button' onClick={ this.handleClick }>
          { this.state.show? 'Hide' : 'Show' } Terminal!
        </button>
      </div>
    )
  }
}

export default withRouter(Navigator);
