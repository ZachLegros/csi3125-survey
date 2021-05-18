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
        We would like to have your thoughts on the{" "}
        <a href="https://twitter.com/home" target="_blank">
          Twitter
        </a>{" "}
        homepage user interface.
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
          <input type="text" placeholder="Enter your Last name" />
        </div>
      </div>
      <div className="input-section">
        <h2>What do you like?</h2>
      </div>
      <input id="r1" type="radio" name="radio" value="1" />
      <label for="r1">Radio</label>
      <input id="c1" type="checkbox" name="checkbox" value="1" />
      <label for="c1">Checkbox</label>
      <label class="select" for="slct">
        <select id="slct" required="required">
          <option value="" disabled="disabled" selected="selected">
            Select option
          </option>
          <option value="#">One</option>
          <option value="#">Two</option>
          <option value="#">Three</option>
          <option value="#">Four</option>
          <option value="#">Five</option>
          <option value="#">Six</option>
          <option value="#">Seven</option>
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
    </Container>
  </Layout>
)

export default IndexPage
