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
    this.state = { value: '',
                   commands: [] };
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.addToHistory = this.addToHistory.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  /* Focus form input on initial render. */
  componentDidMount() { this.commandInput.focus(); }

  /* Handle input field change on user input. */
  handleChange(event) { this.setState({value: event.target.value}); }

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
       this.addToHistory(this.state.value);
      }
      else if (commands[0] === 'cd') {
        history.push("/"+commands[1]);
        this.addToHistory(this.state.value);
      }
      else if (commands[0] === 'ls') {
        this.addToHistory('design code prototyping about');
      }
      else if (commands[0] === 'close') {
        this.props.onNavigatorChange()
        // this.setState({show: false});
      } else {
        this.addToHistory('command not found!');
      }
      this.setState({value: ''});
    }
  }

  addToHistory(command) {
    this.setState({commands: this.state.commands.concat([command])});
  }

  /* Handle toggle button click. */
  handleClick() {
    this.setState({ value: this.state.value });
    this.props.onNavigatorChange();
  }

  /* Clear the stack of previously-executed commands
     displayed in the navigator. */
  clearCommands() { this.setState({commands: []}); }

  render() {
    return (
      <div className='navigator'>
        <Fade left when={ this.props.navigator }>
          <div className='history'>
            {this.state.commands.map(command => <HistoryItem command={command} />)}
            <div className='current'>
              <div className='prompt'> > </div>
              <input ref={(input) => { this.commandInput = input; }}
                     onKeyPress={this.handleEnter}
                     onChange={ this.handleChange }
                     value={this.state.value} />
            </div>
          </div>
        </Fade>
        <button className='toggle' type='button' onClick={ this.handleClick }>
          { this.props.navigator? 'Hide' : 'Show' } Terminal!
        </button>
      </div>
    )
  }
}

export default withRouter(Navigator);
