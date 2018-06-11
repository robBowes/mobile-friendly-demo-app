import React, {Component} from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Album from './components/Album';
import Post from './components/Post';
import Search from './components/Search';
import {connect} from 'react-redux';
import {home} from './actions/actions';
import {Link, Route, Redirect, Switch, withRouter} from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      view: 'LOGIN',
    };
  }
  render() {
    return (
      <div className="App">
          {this.props.view!=='LOGIN'?<nav>
            <div className="menu">
                <Link to='/home'
                >Home</Link>
                <Link to='/search'>Users</Link>
                <div>Logout</div>
            </div>
          </nav>:<Login />}
            <Switch>
              {/* <Route exact path='/' component={Login} /> */}
              <Route exact path='/post/:id' component={Post} />
              <Route exact path='/album/:id' component={Album} />
              <Route exact path='/search' component={Search} />
              <Route exact path='/home' render={()=><Home />}/>
            </Switch>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  view: state.view.name,
  user: state.user,
});
export default withRouter(connect(mapStateToProps)(App));
