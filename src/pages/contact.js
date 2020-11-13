import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import ContactForm from "../components/contactform"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    {/* <Masthead /> */}
    <section className="contact" id="top">
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-8">
            <h1>Projects++</h1>
            <p>
              Hey there! Send me a message! You can also reach me
              through the following links:
            </p>
            <ul className="list-group list-group-horizontal">
              <li className="list-group-item">
                <a href="mailto:contact@mrgkanev.eu">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
              <li className="list-group-item">
                <a href="https://github.com/mrgkanev">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li className="list-group-item">
                <a href="https://linkedin.com/in/mrgkanev">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li className="list-group-item">
                <a href="https://twitter.com/mrgkanev">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  </Layout>
)

export default ContactPage
