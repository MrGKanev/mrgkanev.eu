import React from "react"

import Image from "../image"

import { Link } from "react-scroll"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container h-100">
        <div className="row h-100 justify-content-around mb-5">
          <div className="col-lg-5 my-auto">
            <div className="hero-introduction">
              <h1>
                <span className="wave mr-2" role="img" aria-label="Hand wave">
                  👋
                </span>
              </h1>
              <h1>
                Hi. I'm
                <br />
                Gabriel (Gabo) Kanev
              </h1><br />
              <p>
              Hello, I'm a self-employed web developer (yep im that old), geek, and open-source enthusiast. Some of my projects are  @bimbalacom, @antiproxies and @mgknetcom.
              <br/><br /></p>
              <Link
                to="content"
                className="hero-button btn btn-primary shadow-sm"
                smooth={true}
              >
                Learn stuff about me
              </Link>
            </div>
          </div>
          <div className="col-lg-4 my-auto">
            <div className="hero-bio">
              <div className="card shadow-sm mb-5">
                <div className="card-body">
                  <div className="icon">
                    <Image
                      fileName="mini_profile.jpg"
                      style={{ width: "5rem", height: "5rem" }}
                      alt=""
                    />
                  </div>
                  <h3 className="card-title">@mrgkanev</h3>
                  <h4>
                    <span role="img" aria-label="pin">
                      📍
                    </span>{" "}
                    Ruse, Bulgaria <br />
                  </h4>
                  <p className="card-text">
                  Software Engineer, Open-Source Enthusiast, Car guy
                  </p>
                  <ul className="list-group list-group-horizontal">
                  <li className="list-group-item">
                      <a
                        href="https://twitter.com/mrgkanev"
                        target="_blank"
                        rel="noreferrer"
                        alt="Twitter button"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li className="list-group-item">
                      <a
                        href="https://github.com/mrgkanev"
                        target="_blank"
                        rel="noreferrer"
                        alt="Github button"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>
                    <li className="list-group-item">
                      <a
                        href="https://linkedin.com/in/mrgkanev"
                        target="_blank"
                        rel="noreferrer"
                        alt="LinkedIn button"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                    <li className="list-group-item">
                      <a
                        href="mailto:contact@mrgkanev.eu"
                        target="_blank"
                        rel="noreferrer"
                        alt="Email button"
                      >
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                    </li>
                  </ul>
                  {/* <a
                    href="https://twitter.com/mrgkanev"
                    className="follow-button btn btn-primary shadow-lg"
                    target="_blank"
                  >
                    Follow
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
