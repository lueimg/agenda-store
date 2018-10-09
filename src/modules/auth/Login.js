import React from 'react'
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { AuthActions } from '../../store/actions/auth';

import './login.scss';

class Login extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.login = this.login.bind(this);
  }

  state = {
    email: 'test@ahorro.com',
    password: '123456'
  }

  updateEmail = (event) => {
    this.setState({email: event.target.value})
  }

  updatePass = (event) => {
    this.setState({password: event.target.value});
  }
  
  login() {
    this.props.actions.login(this.state.email, this.state.password);
  }

  componentDidUpdate(){
    console.log('*** Login componentDidUpdate', this.props);
    if (this.props.user && this.props.user.uid) {
      this.props.history.push('/')
    }
  };
  
  

  render() {
    return (
      <div className="login-wrapper">
        <div className="login-row">
          <TextField label="email " value={this.state.email} onChange={this.updateEmail} />
        </div>

        <div  className="login-row">
          <TextField label="Clave " value={this.state.password} type="password" onChange={this.updatePass} />
        </div>
        <div className="login-row">
          <Button onClick={this.login} variant="contained" color="primary">Login</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      login (email, password) { dispatch(AuthActions.login(email, password))  }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
