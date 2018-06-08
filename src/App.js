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
  render() {
    console.log(this.props);
    return (
      <div className="App">
          {this.props.view==='LOGIN'?<Login />: null}
          {this.props.view==='HOME'?<Home />: null}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  view: state.view,
});
export default connect(mapStateToProps)(App);
