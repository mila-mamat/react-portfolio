import React from 'react'
import "./style.css";

function Intro() {

  return (
    <section id="intro" class="y-center">
      <div class="container">
        <div class="row">
          <div class="col-md-6 p-md-5 order-md-2 text-center text-md-left">
            <img src="./asset/img/mila.png" alt="mila"></img>
          </div>
          <div class="col-md-6 y-center text-center text-md-right order-md-1">
            <h1><span class="color-green ">M</span>ILA</h1>
            <h4 class="font-weight-light">A FULL STACK <span class="font-weight-bold">WEB DEVELOPER</span></h4>
            <h4 class="font-weight-bold color-gray"> &lt; / &gt;</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro