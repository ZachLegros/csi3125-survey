import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Container from "../components/container"
import Seo from "../components/seo"

import "../components/survey.css"

const IndexPage = () => (
  <Layout>
    <Seo title="UI Survey" />
    <Container>
      <h1>Twitter UI Survey</h1>
      <p>
        We would love to hear from you on the{" "}
        <a href="https://twitter.com/home" target="_blank">
          Twitter
        </a>{" "}
        home page UI.
      </p>
      <a
        href="https://twitter.com/home"
        target="_blank"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          borderRadius: "0.5rem",
          marginBottom: "2.5rem",
        }}
      >
        <StaticImage
          src="../images/twitter.png"
          width={700}
          quality={100}
          formats={["AUTO", "WEBP", "AVIF"]}
          className="website-preview"
          style={{
            height: "100%",
            transition: "opacity .25s linear, transform 0.2s",
          }}
        />
      </a>

      <div className="input-section">
        <h2>Tell us a little bit about you</h2>
        <div className="input-group">
          <p className="input-title">First name</p>
          <input type="text" placeholder="Enter your first name" />
        </div>
        <div className="input-group">
          <p className="input-title">Last name</p>
          <input type="text" placeholder="Enter your last name" />
        </div>
        <div className="input-group">
          <p className="input-title">Your program of study</p>
          <label class="select" for="slct">
            <select id="slct" required="required">
              <option value="" disabled="disabled" selected="selected">
                Select option
              </option>
              <option value="#">Software Engineering</option>
              <option value="#">Computer Science</option>
              <option value="#">Computer Engineering</option>
              <option value="#">Visual Arts</option>
              <option value="#">Other</option>
            </select>
            <svg>
              <use href="#select-arrow-down"></use>
            </svg>
          </label>
          <svg class="sprites">
            <symbol id="select-arrow-down" viewbox="0 0 10 6">
              <polyline points="1 1 5 5 9 1"></polyline>
            </symbol>
          </svg>
        </div>
      </div>
      <div className="input-section">
        <h2>Which components do you think need to be redesigned?</h2>
        {[
          "Home feed",
          "Navigation menu (left)",
          "Search bar",
          "Suggestions panel (right)",
          "None, they all look great!",
        ].map((value, index) => {
          return (
            <div
              style={{
                marginBottom: "1rem",
              }}
            >
              <input
                id={`c${index}`}
                type="checkbox"
                name="checkbox"
                value={`${index}`}
              />
              <label for={`c${index}`}>{value}</label>
            </div>
          )
        })}
      </div>
      <div className="input-section">
        <h2>What is your favorite aspect of the design?</h2>
        {["Color scheme", "Overall layout", "Accessibility features"].map(
          (value, index) => {
            return (
              <div
                style={{
                  marginBottom: "1rem",
                }}
              >
                <input
                  id={`r${index}`}
                  type="radio"
                  name="radio"
                  value={`${index}`}
                />
                <label for={`r${index}`}>{value}</label>
              </div>
            )
          }
        )}
      </div>
      <div className="input-section">
        <h2>Other comments</h2>
        <textarea
          style={{
            height: "150px",
          }}
        />
      </div>
      <button style={{ marginTop: "1rem" }}>Submit</button>
    </Container>
  </Layout>
)

export default IndexPage
