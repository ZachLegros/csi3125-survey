import * as React from "react"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="UI Survey" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>{/* <Link to="/page-2/">Go to page 2</Link> <br /> */}</p>
    <input type="text" placeholder="Full name" />
    <br />
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
  </Layout>
)

export default IndexPage
