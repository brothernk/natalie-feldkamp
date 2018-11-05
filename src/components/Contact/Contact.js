import React, { Component } from 'react';

<form name="contact" netlify hidden>
<input type="text" name="name" />
<input type="email" name="email" />
<textarea name="message"></textarea>
</form>

class Contact extends Component {
render() {
  return( 
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
      <form name="contact" method="post" data-netlify="true">
        <div className="form-text">
          <p>Name</p>
          <input className="form-entry" type="text" name="name"/>
          <p>Email</p>
          <input className="form-entry" type="text" name="email"/>
          <p>Message</p>
          <input className="form-entry" type="textarea" name="message"/>
        </div>
        <button className="submit-btn">Submit</button>
      </form>
    </div>
    <i className="fas fa-angle-down"></i>
  </div>
)}

}

export default Contact;