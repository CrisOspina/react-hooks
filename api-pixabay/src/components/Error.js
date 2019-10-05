import React from 'react'

const Error = ({ mensaje }) => (
  <section className="hero is-dark">
    <div className="hero-body">
      <div className="container">
        <h1 className="title has-text-centered">
          {/* role="img" aria-label="emoji" para los emojis */}
          <span className="has-text-centered" role="img" aria-label="emoji">
            ...
          </span>
        </h1>
        <h2 className="subtitle has-text-centered">{mensaje}</h2>
      </div>
    </div>
  </section>
)

export default Error
