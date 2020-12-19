import React, { Component } from 'react';

class Joke extends Component {

    
    handleClick = (e) => {
      e.stopPropagation();
      console.log('Telling a joke!');
    
      // Add this line. You'll call the function passed through props.
    //   this.props.onFaveToggle();
    
      // Delete the `setState` line. You no longer track state here.
      // this.setState({isFave: !this.state.isFave});

      this.props.onJokeClick(e);
    }

  render() {

    return (
        <div>
          <p>
          {this.props.joke.setup}
          </p>
          <p>
          {this.props.joke.punchline}
          </p>
          <p>want a joke from {this.props.birdName}? 
                < button onClick={this.handleClick}>click me</button>
          </p>
        </div>
    )
  }
}

export default Joke