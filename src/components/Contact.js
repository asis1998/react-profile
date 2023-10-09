import React from 'react'

const Contact = () => {
  return ( 
  <section id="contact" className="contact">
    <h2 className='title'>Contact</h2>
    <div className="container">
      <div className="socials flex">
        <a href="">
        <i class="fa-brands fa-facebook"></i>
        </a>
        <a href="">
        <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="">
        <i class="fa-brands fa-github"></i>
        </a>
        <a href="">
        <i class="fa-brands fa-instagram"></i>
        </a>
      </div>
      <div className="email-container flex">
        <input type="text" placeholder='email address' />
        <i class="fa-solid fa-paper-plane"></i>
      </div>
    </div>
  </section>
  )
}

export default Contact