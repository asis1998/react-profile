import React from 'react'
import profilePic from "../assets/a.png"

export const Hero = () => {
  return (
    <section id="home" className="container hero-section">
      <div className="grid hero">
        <div className="left flex">
          <p>
            Hi i'm <strong>Aashish Shrestha</strong>
          </p>
          <h3>Software Engineer</h3>
          <p>I love coding and teach others what I know</p>
          <button className="download-btn">
            <a href="../assets/a.png" download>
              Download CV <i class="fa-solid fa-download"></i>
            </a>
          </button>
        </div>
        <div className="right flex">
          <img src={profilePic} alt="profile-pic" />
        </div>
      </div>
    </section>
  )
}

