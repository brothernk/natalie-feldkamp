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
      <h3 className='email'>feldk008@umn.edu</h3>
      <h3 className='phone'>651.315.3643</h3>
      <div className='social-icons'>
      <a target='_blank' href='https://www.linkedin.com/in/nataliefeldkamp/'><i className="fab fa-facebook-f"></i></a>
        <a target='_blank' href='https://www.linkedin.com/in/nataliefeldkamp/'><i className="fab fa-instagram"></i></a>
        <a target='_blank' href='https://www.linkedin.com/in/nataliefeldkamp/'><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>
    <div className="right-side">
      <p className='cta'>Message Me</p>
      <form onSubmit={this.handleSubmit}>
        <div className="form-text">
          <p>Name</p>
          <input className="form-entry" type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
          <p>Email</p>
          <input className="form-entry" type="text" name="email" onChange={this.handleChange} value={this.state.email}/>
          <p>Message</p>
          <input className="form-entry" type="textarea" name="message" onChange={this.handleChange} value={this.state.message}/>
        </div>
        <button className="submit-btn" onSubmit={this.handleSubmit}>Submit</button>
      </form>
    </div>
    <i className="fas fa-angle-down"></i>
  </div>
)}
}
export default Contact;