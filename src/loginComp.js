import React from 'react';

export default class loginComp extends React.Component {
    constructor (props) {
        super(props);
        this.setState(() => {
            return {
                loginState : false
            }
        });
    }
     
    onLoginDone (props)
    {
        this.setState ((prevState) => {
            return {
                loginState : true
            }
        })
    }
}