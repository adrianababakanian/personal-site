import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import HistoryItem from './history-item/HistoryItem';
import './Navigator.css';

class Navigator extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { show: false, value: '', commands: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  /* Handle input field change on user input.  */
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  /* On submitting a new command, send to correct route
     and add to rendered stack of previously-executed
     commands. */
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
        this.setState({commands: this.state.commands.concat([this.state.value])});
      }
      this.setState({value: ''});
    }
  }

  /* Handle toggle button click. */
  handleClick() {
    this.setState({ show: !this.state.show, value: this.state.value });
  }

  /* Clear the stack of previously-executed commands
     displayed in the navigator. */
  clearCommands() {
    this.setState({commands: []});
  }

  render() {
    return (
      <div className='navigator'>
        <Fade left when={ this.state.show }>
          {/* <div className="navigator">
            <input onKeyPress={this.handleEnter} onChange={ this.handleChange } />
          </div> */}
          <div className='history'>
            <HistoryItem command="cd design" />
            {this.state.commands.map(command => <HistoryItem command={command} />)}
            <input onKeyPress={this.handleEnter} onChange={ this.handleChange } />
          </div>
        </Fade>
        <button className='toggle' type='button' onClick={ this.handleClick }>
          { this.state.show? 'Hide' : 'Show' } Terminal!
        </button>
      </div>
    )
  }
}

export default withRouter(Navigator);
