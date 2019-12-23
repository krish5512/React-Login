import React from 'react';
import './App.css';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.setOptionSignIn = this.setOptionSignIn.bind(this);
    // this.setOptionSignUp = this.setOptionSignUp.bind(this);
    // this.setOptionForget = this.setOptionForget.bind(this);
   
    this.state = {
      option : 1    
    };
  }

  updateState(option) {
    this.setState({
      option
    });
  }
// setOptionSignIn = () => {
//   this.setState(()=> {
//     return {
//       option : 1
//     }
//   })
// }
// setOptionSignUp = () => {
//   this.setState(()=> {
//     return {
//       option : 2
//     }
//   })
// }
// setOptionForget = () => {
//   this.setState(()=> {
//     return {
//       option : 3
//     }
//   })
// }
render() {
  return (
      <div className="container">
      {
        console.log(this.state.option+"before and type is "+ typeof this.state.option)
      }
      <header 
      className={`header-headings ${
        this.state.option === 1 ? 'sign-in' : this.state.option === 2 ? 'sign-up' : 'forgot'
      }`}>       
      { this.state.option === 1 && <span>Sign in to your account</span>}
      {this.state.option === 2 && <span>Create an account</span>    }
       {this.state.option === 3 && <span>Reset your password</span>}
      </header>   
      {
        console.log(this.state.option+"after and type is "+ typeof this.state.option)
      }
      <ul className="options">
      <li className={this.state.option === 1 ? 'active' : ''} onClick={() => this.updateState(1)}>Sign in</li>
      <li className={this.state.option === 2 ? 'active' : ''} onClick={() => this.updateState(2)}>Sign up</li>
      <li className={this.state.option === 3 ? 'active' : ''} onClick={() => this.updateState(3)}>Forget</li> 
      </ul>
      <Form optionState={this.state.option} />
      </div>
  )}
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


