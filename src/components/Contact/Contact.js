import React, { Component } from 'react';


const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
        name: '',
        email: '',
        message:'',
    }

}

handleChange = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
}

handleSubmit(e) {
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({ "form-name": "contact", ...this.state })
  })
    .then(() => alert("Success!"))
    .catch(error => alert(error));

  e.preventDefault();
};

render() {
  const { name, email, message } = this.state;
  return( 
  <div className="page" id="contact-pg">
    <div className="left-side">
      <p className="cursive">let's</p>
      <h2 className="header">Connect</h2>
      <hr></hr>
      <h3 className='email'>feldk008@umn.edu</h3>
      <h3 className='phone'>651.315.3643</h3>
      <div className='social-icons'>
      <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/nataliefeldkamp/'><i className="fab fa-facebook-f"></i></a>
        <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/nataliefeldkamp/'><i className="fab fa-instagram"></i></a>
        <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/nataliefeldkamp/'><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>
    <div className="right-side">
      <p className='cta'>Message Me</p>
      <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field"onSubmit={this.handleSubmit}hidden>
        <div className="form-text">
          <p>Name</p>
          <input className="form-entry" type="text hidden" name="name" onChange={this.handleChange} value={name}/>
          <p>Email</p>
          <input className="form-entry" type="text hidden" name="email" onChange={this.handleChange} value={email}/>
          <p>Message</p>
          <input className="form-entry" type="textarea hidden" name="message" onChange={this.handleChange} value={message}/>
        </div>
        <button className="submit-btn" onSubmit={this.handleSubmit}>Submit</button>
      </form>
    </div>
    <i className="fas fa-angle-down"></i>
  </div>
)}
}
export default Contact;