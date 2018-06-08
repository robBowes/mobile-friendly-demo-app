import React, {Component} from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import {connect} from 'react-redux';


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
      default:
        return (<div>Loading</div>);
    }
  };
  render() {
    return (
      <div className="App">
          <nav>
            <div className="menu">
                <div>Home</div>
                <div>Users</div>
                <div>Posts</div>
            </div>
          </nav>
          {this.switchView(this.props.view)}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  view: state.view,
});
export default connect(mapStateToProps)(App);
