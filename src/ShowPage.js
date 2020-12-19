import React, { Component } from "react";
import "./App.css";
import Joke from './Joke';

class ShowPage extends Component {

state = {
    birdImage : '',
    genus : '',
    conservationStatus : '',
    homePage : '',
    newJoke : {
      setUp : '',
      punchline : ''

    }
}

handleJokeClick = async event => {
  event.preventDefault();
  // event.stopPropagation();
  const response = await fetch('https://official-joke-api.appspot.com/random_joke');
  const data = await response.json();
  this.setJoke(data);
};

setJoke = (data) => {
  this.setState({
    newJoke: data
  })
}
componentDidMount = () => {
    const birdName = this.props.BirdInfo.params.bird;
    const birdInfo = this.props.info.map((bird, index) => {

            if (birdName === this.props.info[index].name) {
                this.setState({
                    birdImage : this.props.info[index].image,
                    genus : this.props.info[index].genus,
                    conservationStatus : this.props.info[index].conservationStatus,
                    homePage : this.props.info[index].homepage
                })
            }
    }

);
}

  render() {
    const birdName = this.props.BirdInfo.params.bird;

    return (
      <div>
          <h1>{birdName}</h1>
          <p>({this.state.genus})</p>
          <img src={this.state.birdImage} alt=""/>
          <p>{this.state.conservationStatus}</p>
          <a href ={this.state.homePage}>Read More</a>
          
          <Joke joke={this.state.newJoke} birdName = {birdName}
                    onJokeClick = {this.handleJokeClick}/>
    </div>
    );
  }
}

export default ShowPage;