import React, { Component } from 'react';
import resume from "./Resume.pdf";
console.log(resume);
const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Thanks for reaching out! I'll be in touch shortly."))
      .catch(error => alert(error));
      this.setState({
        name: '',
        email: '',
        message:''
    })

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { name, email, message } = this.state;
    return (
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
          <form name="contact" onSubmit={this.handleSubmit}>
          <div className="form-text">
            <p> Name</p>
            <input className="form-entry" type="text" name="name" value={name} onChange={this.handleChange} />
            <p>Email</p>
            <input className="form-entry" type="text" name="email" value={email} onChange={this.handleChange} />
            <p> Message</p>
            <input className="form-entry" type="textarea" name="message" value={message} onChange={this.handleChange} />
            </div>
            <button className="submit-btn" type="submit">Send</button>
            </form>
            <button className="submit-btn"><a href={resume} download>Download my Resume</a></button>
        </div>
       </div>
        );
      }
    }


export default Contact;