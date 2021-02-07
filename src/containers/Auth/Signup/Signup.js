import React from 'react';
import Button from '../../../component/Button/Button';
import Input from '../../../component/Input/Input';

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

