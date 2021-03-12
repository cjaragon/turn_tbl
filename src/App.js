import React, { Component } from 'react'
import './styles/style.css'
import Routes from './routes'
import Header from './components/header'
import {connect} from 'react-redux';
import {getUser} from './ducks/userReducer'

  class App extends Component {

    componentDidMount(){
      this.props.getUser();
    }

   render () {
     return (
       <div className="App">
         <Header />
         {Routes}
       </div>
     );
   }
  }

  const mapStateToProps = state => state;

  export default connect(mapStateToProps, {getUser})(App);