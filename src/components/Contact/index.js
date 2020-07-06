import React from "react";
import emailjs from "emailjs-com";
import "./style.css";

function Contact() {


 
  return (
    <section class="pt-5 position-relative" id="contact">
      <div class="container p-md-5 px-lg-5">
        <div class="row align-items-center pt-3">
          <div
            class="col-lg-5 offset-lg-1 mb-5 mb-lg-0 aos-init aos-animate"
            data-aos="fade-right"
          >
            <div class="bg-white p-5 shadow">
              <div class="heading-section text-center">
                <h2 class="mb-4">Contact Me</h2>
              </div>

              <form id="contact-form"  >
                <div class="row">
                  <div class="col-md-12 form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                    />
                  </div>
                  <div class="col-md-12 form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="col-md-12 form-group">
                    <input
                      type="number"
                      class="form-control"
                      id="phoneNumber"
                      name="phoneNumber"
                      placeholder="Phone (optional)"
                    />
                  </div>
                  <div class="col-md-12 form-group">
                    <textarea
                      class="form-control"
                      id="message"
                      name="message"
                      rows="3"
                      placeholder="Your Message ..."
                    ></textarea>
                  </div>
                  <div class="col-md-12 text-center">
                    <button
                      class="btn btn-light badge-pill px-3"
                      type="submit"
                      name="submit"
                      value="send"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            class="col-lg-4 offset-lg-1 aos-init aos-animate"
            data-aos="fade-left"
          >
            <h4 class="mb-4">Contact Address</h4>
            <div>
              <ul class="contact-me">
                <li>
                  <span class="glow-effect m-2 ">
                    <i class="fa fa-map-marker"></i>
                  </span>{" "}
                  Ottawa, ON
                </li>
                <li>
                  <span class="glow-effect m-2 ">
                    <i class="fa fa-envelope"></i>
                  </span>{" "}
                  <a href="mailto:mila.windsor@gmail.com">
                    mila.windsor@gmail.com
                  </a>
                </li>
                <li>
                  <span class="glow-effect m-2 ">
                    <i class="fa fa-phone"></i>
                  </span>{" "}
                  <a href="tel:6047256771">604-725-6771</a>
                </li>
              </ul>
            </div>
            <hr />
            <br></br>
            <h4>Find me on ...</h4>
            <ul class="social">
              <li>
                <a
                  href="https://www.linkedin.com/in/mila-mamat-a7a344115/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="glow-effect"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/mila-mamat"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="glow-effect"
                >
                  <i class="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/mila.gulmira/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="glow-effect"
                >
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <div class="text-center bg-green py-3">Created By Mila @ 2020</div>
      </footer>
    </section>
  );
}

export default Contact;
