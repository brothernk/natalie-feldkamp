import React, { Component } from 'react';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        message:'',
        clients: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    });
}

handleSubmit(e) {
    e.preventDefault();
    console.log("This is working")
    const client = {
        name: this.state.name,
        email: this.state.email,
        message:this.state.message
    }
    this.setState({
        name: '',
        email: '',
        message:''
    });
}

render() {
  return(
  <div className="page" id="contact-pg">
    <div className="left-side">
      <p className="cursive">let's</p>
      <h2 className="header">Connect</h2>
      <hr></hr>
      <h3>natalie@gmail.com</h3>
      <h3>651.123.1234</h3>
      <i className="fab fa-facebook-f"></i>
      <i className="fab fa-instagram"></i>
      <i className="fab fa-linkedin-in"></i>
    </div>
    <div className="right-side">
      <form onSubmit={this.handleSubmit}>
        <div className="form-text">
          <p>Name</p>
          <input className="form-entry" type="text" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Young Bill"/>
          <p>Email</p>
          <input className="form-entry" type="text" name="email" onChange={this.handleChange} value={this.state.email} placeholder="HadToBeYou@gmail.com"/>
          <p>Message</p>
          <input className="form-entry" type="textarea" name="message" onChange={this.handleChange} value={this.state.message} placeholder="Hello"/>
        </div>
        <button className="submit-btn" onSubmit={this.handleSubmit}>Submit</button>
      </form>
    </div>
    <i className="fas fa-angle-down"></i>
  </div>
)}
}
export default Contact;