import React from 'react'

 function Contact() {
  return (
    <div>
  <div>
    <form className="form-container">
    <h2 className="form-text">We'd Love To Hear From You</h2>
    <label for="name">Name</label>
    <input type="text" name="name" id="name" required></input>
    <label for="email">Email</label>
    <input type="email" name="email" id="email" required></input>
   <textarea name="message" id="message"></textarea>
   <input type="submit" value="Submit"></input>
    </form>
  </div>
    </div>
  )
}

export default Contact
