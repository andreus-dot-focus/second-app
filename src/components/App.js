import React from 'react';
import {connect} from 'react-redux';
import {User} from './User';
import {Page} from './Page'
import {getPhotos} from '../actions/PageActions'
import { handleLogin } from '../actions/UserActions';

class App extends React.Component{
  render(){
    const {user, page, getPhotosAction, handleLoginAction} = this.props
    return (
      <div className="app">
        <Page photos={page.photos} year={page.year} getPhotos={getPhotosAction} isFetching={page.isFetching} error={page.error}/>
        <User name={user.name} error={user.error} isFetching={user.isFetching} handleLogin={handleLoginAction} />
      </div>
    );
  }
}

const mapStateToProps = store => ({
    user: store.user,
    page: store.page,
})

const mapDispatchToProps = dispatch => ({
  getPhotosAction: year => dispatch(getPhotos(year)),
  handleLoginAction:()=>dispatch(handleLogin()),
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
  )(App)
