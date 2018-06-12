import React, {Component} from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Album from './components/Album';
import Post from './components/Post';
import Search from './components/Search';
import Profile from './components/Profile';
import {logout} from './actions/actions';
import {connect} from 'react-redux';
import {Link, Route, Switch, withRouter} from 'react-router-dom';
import {fixedHeader} from './components/css/classes';


class App extends Component {
  constructor() {
    super();
    this.state = {
      view: 'LOGIN',
    };
  }
  render() {
    return (
      <div className="App mdl-color--grey-100">
          {this.props.view!=='LOGIN'?<nav>
            <div
            className={fixedHeader +
            ' menu mdl-navigation mdl-layout__header-row mdl-layout__header'}>
                <Link to='/home'
                className="mdl-navigation__link"
                >Home</Link>
                <Link to='/search'
                className="mdl-navigation__link"
                >Users</Link>
                <Link
                to='/'
                className="mdl-navigation__link"
                onClick={()=>this.props.dispatch(logout())}
                >Logout</Link>
            </div>
          </nav>:<Login />}
            <Switch>
              <Route exact path='/post/:id' component={Post} />
              <Route exact path='/album/:id' component={Album} />
              <Route exact path='/profile/:id' component={Profile} />
              <Route exact path='/search' component={Search} />
              <Route exact path='/home' render={()=><Home />}/>
              <Route
              exact
              path='/'
              render={()=>this.props.view==='HOME'?<Home />:null}/>
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
