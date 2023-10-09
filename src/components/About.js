import React from 'react'
import profilePic from '../assets/a.png'

const About = () => {
  return (
    <section id="about" className='about'>
      <h2 className="title">About Me</h2>
      <div className="container flex">
        <div className='about-left flex'>
          <img src={profilePic} alt="profile-pic" />
        </div>
        <div className="about-right ">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim reiciendis, officia libero vero architecto placeat nesciunt, non error qui labore, ullam quod minus dicta. Aliquam cumque pariatur vel labore sequi?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates veritatis labore fuga consequuntur quam explicabo soluta amet voluptate, dicta nesciunt, modi rem voluptatum tempore. Ex possimus molestias autem iusto porro?</p>
        <p>sydney, Australia</p>
        <div className='tag'>Interest</div>
        <div className="flex interests">
          <span>Coding</span>
          <span>Football</span>
          <span>Reading</span>
        </div>
        </div>
      </div>
    </section>
  )
}

export default About