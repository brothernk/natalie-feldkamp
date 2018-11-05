import React, { Component } from 'react';
// import resume from "../../../public/Resume.pdf";

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

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

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
          <h3 className='email'>X</h3>
          <h3 className='phone'>X</h3>
          <div className='social-icons'>
            <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/nataliefeldkamp/'><i className="fab fa-facebook-f"></i></a>
            <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/nataliefeldkamp/'><i className="fab fa-instagram"></i></a>
            <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/nataliefeldkamp/'><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="right-side">
          <p className='cta'>Message Me</p>
          <form onSubmit={this.handleSubmit}>
            <p>
              <label>
                Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message" value={message} onChange={this.handleChange} />
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
       </div>
        );
      }
    }


export default Contact;