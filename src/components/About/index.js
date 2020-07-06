import React from 'react'
import "./style.css";

function About() {

  return (
    // <!-- about me  -->
    <section class="bg-green y-center" id="about">
      <div class="container py-md-5 px-lg-5">
        <h3 class="text-center my-5">ABOUT ME</h3>
        <div class="row m-lg-5">
          <div class="col-md-5">
            <img src="./assets/img/photo-of-laptop-near-the-coffee-977844.jpg"
              class="shadow d-none d-md-block mx-auto img-thumbnail" /> 
            <img src="./assets/img/flatlay-photography-of-laptop-977842.jpg" class="shadow d-md-none img-thumbnail mb-5" /> 
  
          </div>
          <div class="col-md-7 pl-lg-5 y-center">
            <p class="text">
              A self-motivated web developer with profound knowledge of HTML,
              CSS, Java, JavaScript,JSON, AJAX, MySQL and other related systems.
              <br />
              <br />
              Enjoy the process of coding, solving analytically complex problems
              and pushing my limits. Recently earned a certificate in Full Stack
              Development to find an entry-level programmer position with
              opportunities for career growth in the long-term.
              <br />
              <br />
              A bit more about me, self-learned and taught statistics for three
              years, and helped more than 1000 students with their academic
              success through my strong organizational, curriculum design, and
              communication skills.
              <br />
              <br />
              <a type="button" class="btn btn-primary badge-pill px-3"
                href="./assets/mila-mamat-resume.pdf" target="_blank" rel="noopener noreferrer"> 
                View Full Resume
              </a>
            </p>
          </div>
        </div>
      </div>
      <a href="https://www.pexels.com/photo/photo-of-laptop-near-the-coffee-977844/" target="_blank">Photo by Dominika
        Roseclay from Pexels</a>
    </section>
  )
}

export default About