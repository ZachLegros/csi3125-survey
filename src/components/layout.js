import * as React from "react"
import PropTypes from "prop-types"
import "@fontsource/open-sans"

import "./layout.css"
import "./inputs.css"
import "./select.css"
import "../components/button.css"

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `50rem`,
          padding: `4rem 1.0875rem`,
          background: `var(--light-gray)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `4rem`,
            textAlign: `center`,
          }}
        >
          Built and designed by
          {` `}
          <a href="https://github.com/ZachLegros" target="_blank">
            Zach Legros
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
