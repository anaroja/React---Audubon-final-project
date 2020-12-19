import './App.css';
import { Route, Link, Switch, Redirect } from "react-router-dom"
import Home from './Home';
import ShowPage from './ShowPage';
import CreatePage from './CreatePage';
import { Component } from 'react';
import birds from './data/data-birds';




class App extends Component {

  state = {
    allBirds : [...birds],
  }

    setBirds = (bird) => {
        this.setState({
            allBirds : [...this.state.allBirds, bird]
        })

      }
      
      render() {
    console.log(this.state.allBirds)

    return (
      <div>
          <nav>
          <Link to="/" >
          <img
            src="https://i.pinimg.com/236x/f7/4c/45/f74c4555450924bf8a4b7748ea1a822f--rainbow-colors-rainbow-bird.jpg"
            alt=""
          />
          <h1>Audubon Society</h1>
          </Link>
          </nav>
        <main>
          <Switch>
            {/* this works with routes because of the order */}
            <Route path="/" exact render={() => <Home birds={this.state.allBirds} />} />
            <Route path="/create" render={() => <CreatePage setBirds={this.setBirds} />} />
        <Route path="/create" render={() => <Redirect to="/create" />} />
            <Route path="/:bird" render={routerProps => <ShowPage BirdInfo={routerProps.match}  info={this.state.allBirds} joke = {this.state.dataj}/>} />
            <Route path="/" render={() => <Redirect to="/" />} />
  
          </Switch>
        </main>
      </div>
    );

  }
}

export default App;
