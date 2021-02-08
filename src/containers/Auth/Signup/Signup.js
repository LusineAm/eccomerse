import React from 'react';

import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';

import './Signup.scss';

class Signup extends React.Component {
    render(){
        return (
            <div>
                <Input />
                <Input />
                <Input />
                <Button>
                    Signup
                </Button>
            </div>
        )
    }
}

export default Signup;

