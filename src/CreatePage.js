import React, { Component } from "react";
import "./App.css";
// import { Route, Link, Switch, Redirect } from "react-router-dom"


class CreatePage extends Component {

    state = {
        name : '',
        birdImage : '',
        genus : '',
        conservationStatus : '',
        homePage : ''
      };


    getName  = (e) => {
        this.setState({
            name : e.target.value,
          });
    }

    getImage  = (e) => {
        this.setState({
            birdImage : e.target.value,
          });
    }

    getGenus  = (e) => {

        this.setState({
            genus : e.target.value,
          });
    }

    getConservationStatus  = (e) => {

        this.setState({
            conservationStatus : e.target.value,
          });
    }

    gethomePage  = (e) => {

        this.setState({
            homePage : e.target.value,
          });
    }
    
    addBird = event => {
        event.preventDefault();

        const bird = {}
        bird.name = this.state.name
        bird.image = this.state.birdImage
        bird.genus = this.state.genus
        bird.conservationStatus = this.state.conservationStatus
        bird.homepage = this.state.homePage

        console.log(bird)


        this.props.setBirds(bird)
      }

  render() {

    return (
      <div>
          <form>
            Name:
            <input 
            type="text"
            placeholder="Type the name here"
            value={this.state.name}
            onChange={this.getName}
            name="name" />
            Image:
            <input 
            type="text"
            placeholder="Type the image URL here"
            onChange={this.getImage}
            value={this.state.birdImage}
            name="image" />
            Genus:
            <input 
            type="text"
            placeholder="Type the genus here"
            onChange={this.getGenus}
            value={this.state.genus}
            name="genus" />
            Conservation Status:
            <input 
            type="text"
            placeholder="Type the conservation status here"
            onChange={this.getConservationStatus}
            value={this.state.conservationStatus}
            name="conservationStatus" />
            Home page:
            <input 
            type="text"
            placeholder="Type the home page link here"
            onChange={this.gethomePage}
            value={this.state.homepage}
            name="homepage" />
        <button onClick={this.addBird}>Add my new bird!</button>

        </form>
        <p>
        https://nas-national-prod.s3.amazonaws.com/styles/bird_illustration/s3/4387_Sibl_9780307957900_art_r1.jpg?itok=KmTCgJhz

        </p>
       

    </div>
    );
  }
}

export default CreatePage;