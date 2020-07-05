import React from 'react'
import "./style.css";

function Skills() {

  return (
    <section id="skills" class="y-center bg-gray">
      <div class="container py-md-5 px-lg-5">
        <h3 class="mt-5">SKILLS</h3>
        <p>I am always excited to learn more and take challenges</p>
        <div class="row m-md-5 px-lg-5">
          <div class="col-sm-4">
            <div class="text-center m-3">
              <i class="fas fa-desktop fa-3x color-green "></i>
            </div>
            <div class="card my-1">
              <h4 class="card-header bg-green text-white">FRONTEND</h4>
              <div class="card-body">
                <ul class="list-unstyled text-secondary text-center">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Bootstrap</li>
                  <li>JavaScript</li>
                  <li>jQuery</li>
                  <li>React</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="text-center m-3">
              <i class="fas fa-database fa-3x color-green"></i>
            </div>
            <div class="card my-1">
              <h4 class="card-header bg-green text-white">BACKEND</h4>
              <div class="card-body">
                <ul class="list-unstyled text-secondary text-center">
                  <li>Node</li>
                  <li>Express</li>
                  <li>Ruby</li>
                  <li>REST</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>Firebase</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="text-center m-3">
              <i class="fa fa-cog fa-3x color-green"></i>
            </div>
            <div class="card my-1">
              <h4 class="card-header bg-green text-white">OTHERS</h4>
              <div class="card-body">
                <ul class="list-unstyled text-secondary text-center">
                  <li>Git</li>
                  <li>Heroku</li>
                  <li>R</li>
                  <li>MicroSoft Office</li>
                  <li>PhotoShop</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills