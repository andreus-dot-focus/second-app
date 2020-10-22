import { render } from '@testing-library/react';
import React from 'react';
import {connect} from 'react-redux';
import './App.css';

class App extends React.Component{
  render(){
    const {name, surname, age} = this.props.user
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <p className="App-intro">Здесь будут самые залайканные фото</p>
    <p> Меня зовут {name} {surname}</p>
    <p> Мне уже {age}</p>
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store)
  return {
    user: store.user,
  }
}

export default connect (mapStateToProps)(App)
