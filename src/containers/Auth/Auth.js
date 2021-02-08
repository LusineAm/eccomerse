import React, {Component} from 'react';

import Login from './Login/Login';
import Signup from './Signup/Signup';

import './Auth.scss';

class Auth extends Component {

    state = {
        isLogin: true
    }

    toggleView = () => {
        this.setState({
            isLogin: !this.state.isLogin
        })
    }

    render(){
        return(
            <div>
            <span onClick={this.toggleView}>Go to{this.state.isLogin ? 'Signup' : 'Login'}</span>
             {this.state.isLogin ? 
            <Login />
            :
            <Signup/>  
             }
            </div>
        )
    }
}

export default Auth;