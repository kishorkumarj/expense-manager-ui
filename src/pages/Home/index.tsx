import React from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'antd';
import * as actionTypes from '../../store/actionTypes';

const Home = ({
  loggedIn,
  userLogin,
  userLogout
}:{
  loggedIn: boolean,
  userLogin: () => void,
  userLogout: () => void
}) => {

  const buttonClick = async () => {
    if (loggedIn){
      userLogout();
    }else{
      userLogin();
    }
  }

  return (
    <Card>
      <h2>Home Page {loggedIn ? 'true': 'false'}</h2>
      <Button
        onClick={() => buttonClick()}>Toggle</Button>
    </Card>
  )
}

const mapStateToProps = (state: any) => {
  return {
    loggedIn: state.user.loggedIn
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    userLogin: () => dispatch({type: actionTypes.PERFORM_LOGIN}),
    userLogout: () => dispatch({type: actionTypes.PERFORM_LOGOUT, userID: 123}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);