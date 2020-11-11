import React from "react"
import SEO from "../components/seo"

import Layout from "../components/layout"
import Image from "../components/image"

import Typing from "react-typing-animation"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
    {/* <Masthead /> */}
    <section className="about" id="top">
      <div className="container">
        <div className="row mt-4 justify-content-center">
          <div className="col-lg-6 col-sm-12 my-auto headline">
            <h1>Things I LOVE</h1>
            <Typing loop cursorClassName={"cursor"}>
              <h2>
                Optimizing stuff - websites / apps
                <Typing.Backspace count={20} delay={1000} />
                <Typing.Delay ms={200} />
                Deleting old code.
                <Typing.Backspace count={20} delay={1000} />
                <Typing.Delay ms={200} />
                Braking stuff.
                <Typing.Backspace count={20} delay={1000} />
                <Typing.Delay ms={200} />
                <Typing.Cursor />
              </h2>
            </Typing>
          </div>
        </div>
        <div className="row my-4 justify-content-center">
          <div className="col-lg-7 my-auto">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="card-title">
                  <h3>
                    Hi{" "}
                    <span role="img" aria-label="Happy face">
                      😊
                    </span>
                  </h3>
                </div>
                <div className="card-text">
                  I’m a self-employed web designer, developer, geek and open-source enthusiast. I love building things that make developers more productive and happier.
                  <br />
                  Still a university student fighting for my bachelor’s degree in Computer Engineering, helping colleagues and teachers on my way.
                  <br />
                  My past gig was at Mi9Retail where I worked on E-commerce websites and blogs used by millions of users.
                  <br />
                  On this page, you will find the projects I’ve worked on, as well as some of my GitHub repositories, blog posts, and some of the talks I’ve given over the years.
                </div>
                         
              </div>
              
            </div>
          </div>
        </div>
         {/* + Profile Picture */}
         <div className="col-lg-6 my-auto mx-auto">
            <Image
              fileName="small_profile.jpg"
              alt="Profile Picture"
              className="about-img-wrapper"
            />
          </div>
          {/* - Profile Picture */}
      </div>
    </section>
  </Layout>
)

export default AboutPage
