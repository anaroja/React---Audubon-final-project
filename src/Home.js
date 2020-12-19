import React, { Component, Fragment } from "react";
import "./App.css";
import {Link } from "react-router-dom"
import Joke from './Joke';



class Home extends Component {

  render() {

    const AllBirds = this.props.birds.map((bird, index) => (
        <ul>
            <Link to={`/${bird.name}`}>
                <img src={bird.image} alt=""/>
            </Link>
               
                 
        </ul> 
    ));

    return (
      <div>
          <h1>Birds</h1>

          <Link to="/create">
          <p>(add new bird)</p>
        </Link>
      {AllBirds}
    </div>
    );
  }
}

export default Home;