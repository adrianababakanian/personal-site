import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import './Navigator.css';

class Navigator extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequried
  }

  constructor(props) {
    super(props);
    this.state = { value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const { match, location, history } = this.props;
    history.push(this.state.value);
    event.preventDefault();
  }

  render() {
    const { match, location, history } = this.props;
    return (
      <div>
        <button type='button' onClick={() => { history.push('/design')}}> to design we go! </button>
        <form onSubmit={this.handleSubmit} >
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
          </label>
        </form>
      </div>
    )
  }
}

// const Navigator = withRouter(({ history }) => (
//   <button type='button' onClick={() => { history.push('/design')}}> to design we go! </button>
// ))

export default withRouter(Navigator);
