import React from 'react';
import './App.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);       
    }
    onFormSubmit = (e) => {
        e.preventDefault();
      }
    render() {
        return (
            <div>
            <form className="account-form" onSubmit={this.onFormSubmit}>
            {
                console.log(this.props.optionState + "in form js")
            }
    <div
     className={`account-form-fields ${
         this.props.optionState === 1 ? 'sign-in' : this.props.optionState === 2 ? 'sign-up' : 'forgot'}`
        }>
        {
            console.log(this.props.optionState + "in form js")
        }

    <input type="email" id="email" name="email" placeholder="E-mail" required/>     
    <input type="password" id="password" name="password" placeholder="Password"
     required={this.props.optionState === 1 || this.props.optionState === 2 ? true : false} 
     disabled={this.props.optionState === 3 ? true : false} />
    <input type="password" id="repeat-password" name="repeat-password" placeholder="Repeat Password"/>
    <button className="btn-submit-form" type="submit">
    {   
      this.props.optionState === 1 ? 'Sign in' : this.props.optionState === 2 ? 'Sign Up' : 'Reset Password'
    }
    </button>
    </div>       
    </form>      
    </div> 
        )
    }
}


//  const Form = (props) => (
//      <div>
//     <form className="account-form" onSubmit={props.onFormSubmit}>
//     {
//         console.log(props.option)
//     }
//     <div className={`account-form-fields ${props.option === 1 ? 'sign-in' : props.option === 2 ? 'sign-up' : 'forgot'}`}>
//     <input type="email" id="email" name="email" placeholder="E-mail" required/>     
//     <input type="password" id="password" name="password" placeholder="Password"
//      required={props.option === 1 || props.option === 2 ? true : false} 
//      disabled={props.option === 3 ? true : false} />
//     <input type="password" id="repeat-password" name="repeat-password" placeholder="Repeat Password"/>
//     <button className="btn-submit-form" type="submit">
//     {   
//       props.option === 1 ? 'Sign in' : props.option === 2 ? 'Sign Up' : 'Reset Password'
//     }
//     </button>
//     </div>       
//     </form>      
//     </div> 
//   );
  
  export default Form;