import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import { GetPlayer, GetAllPlayers } from './data.js'
/** https://reacttraining.com/react-router/web/guides/philosophy */
/** https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf */

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
      </ul>
    </nav>
  </header>
)


const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      {/* both /roster and /roster/:number begin with /roster */}
      <Route path='/roster' component={Roster} />
      <Route path='/schedule' component={Schedule} />
    </Switch>
  )
}
const Home = () => (
  <div>
    <h1>Welcome to the Tornadoes Website!</h1>
  </div>
)
const Roster = (props) => {
  return (
    <div>
      <h2>This is a roster page!</h2>
      <Switch>
        <Route exact path='/roster' component={FullRoster} />
        <Route path='/roster/:number' component={Player} />
      </Switch>
    </div>
  )
}
const Schedule = () => (
  <div>
    <ul>
      <li>6/5 @ Evergreens</li>
      <li>6/8 vs Kickers</li>
      <li>6/14 @ United</li>
    </ul>
  </div>
)

const FullRoster = () => (
  <div>
    <ul>
      {
        GetAllPlayers.map(player => (
          <li key={player.number}>
            <Link to={`/roster/${player.number}`}>{player.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)
const Player = (props) => {
  const player = GetPlayer(
    parseInt(props.match.params.number, 10)
  )
  if (!player) {
    return <div>Sorry, but the player was not found</div>
  }
  return (
    <div>
      <h1>{player.name} (#{player.number})</h1>
      <h2>{player.position}</h2>
    </div>
  )
}
export default App;
