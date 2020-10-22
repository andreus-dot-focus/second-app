import React from 'react';
import {connect} from 'react-redux';
import {User} from './User';
import {Page} from './Page'
import '../App.css';

class App extends React.Component{
  render(){
    const {name} = this.props.user
    const {year, photos} = this.props.page
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <User name={name} />
        <Page photos={photos} year={year} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store)
  return {
    user: store.user,
    page: store.page,
  }
}

export default connect (mapStateToProps)(App)
