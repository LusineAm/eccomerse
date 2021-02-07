import React from 'react';

import Input from '../../../component/Input/Input';
import Button from '../../../component/Button/Button';

class Login extends React.Component{
    render(){
        return (
            <div>
                <Input />
                <Input />
                <Button>
                    Login
                </Button>
            </div>
        )
    }
}

export default Login;