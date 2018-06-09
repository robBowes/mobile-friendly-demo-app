import React, {Component} from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import Post from './components/Post';
import {connect} from 'react-redux';
import {home} from './actions/actions';


class App extends Component {
  constructor() {
    super();
    this.state = {
      view: 'LOGIN',
    };
  }
  switchView = (view) => {
    switch (view) {
      case 'LOGIN':
        return <Login />;
      case 'HOME':
        return <Home />;
      case 'POST':
        return <Post />;
      default:
        return (<div>Loading</div>);
    }
  };
  render() {
    return (
      <div className="App">
          {this.props.view!=='LOGIN'?<nav>
            <div className="menu">
                <div
                onClick={()=>this.props.dispatch(home())}
                >Home</div>
                <div>Users</div>
                <div>Posts</div>
            </div>
          </nav>:null}
          {this.switchView(this.props.view)}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  view: state.view.name,
});
export default connect(mapStateToProps)(App);
